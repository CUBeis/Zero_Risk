import { promises as fs } from "node:fs";
import path from "node:path";

export async function GET() {
  const directory = path.join(process.cwd(), "..");
  const files = await fs.readdir(directory);
  const coverName = files.find(
    (file) => file.toLowerCase().startsWith("portada") && file.endsWith(".pdf"),
  );

  if (!coverName) {
    return new Response("Cover not found", { status: 404 });
  }

  const coverPath = path.join(directory, coverName);
  const file = await fs.readFile(coverPath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
