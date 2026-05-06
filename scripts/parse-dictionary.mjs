import fs from "node:fs";
import path from "node:path";
import xlsx from "xlsx";

const root = process.cwd();
const sourcePath = path.join(root, "..", "Diccionario.xlsx");
const outputPath = path.join(root, "data", "dictionary.json");

if (!fs.existsSync(sourcePath)) {
  console.error(`Dictionary file not found: ${sourcePath}`);
  process.exit(1);
}

const workbook = xlsx.readFile(sourcePath);
const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
const matrix = xlsx.utils.sheet_to_json(firstSheet, { header: 1, defval: "" });

if (!matrix.length) {
  fs.writeFileSync(outputPath, "[]\n", "utf8");
  console.log("No rows found. Wrote empty dictionary JSON.");
  process.exit(0);
}

const normalizeCell = (value) => String(value ?? "").trim();
const containsArabic = (text) => /[\u0600-\u06FF]/.test(text);
const isProbablyHeader = (text) => /(término|termino|inglés|ingles|árabe|arabe|spanish|english|arabic)/i.test(text);

let headerRowIndex = matrix.findIndex((row) =>
  row.some((cell) => isProbablyHeader(normalizeCell(cell))),
);

if (headerRowIndex === -1) {
  // Fallback: many sheets have no explicit headers; assume ES, EN, AR order.
  headerRowIndex = -1;
}

const dataRows = matrix.slice(headerRowIndex + 1);
const normalized = dataRows
  .map((row) => {
    const first = normalizeCell(row[0]);
    const second = normalizeCell(row[1]);
    const third = normalizeCell(row[2]);

    // Skip section title rows and blanks.
    if (!first && !second && !third) return null;
    if (first && first === second && second === third) return null;
    if (isProbablyHeader(first) || isProbablyHeader(second) || isProbablyHeader(third)) return null;

    // Diccionario.xlsx is ordered as ES | EN | AR.
    const candidate = { es: first, en: second, ar: third };
    if (!candidate.ar && containsArabic(candidate.es)) {
      // Defensive swap for unexpected row ordering.
      candidate.ar = candidate.es;
      candidate.es = third;
    }

    return candidate;
  })
  .filter((entry) => entry && entry.ar)
  .map((entry) => ({
    ar: entry.ar,
    en: entry.en || "",
    es: entry.es || "",
  }));

fs.writeFileSync(outputPath, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
console.log(`Parsed ${normalized.length} dictionary rows into ${outputPath}`);
