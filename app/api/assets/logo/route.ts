import { promises as fs } from "node:fs";
import path from "node:path";

export async function GET() {
  const logoPath = path.join(process.cwd(), "..", "logo.jpeg");
  const file = await fs.readFile(logoPath);

  return new Response(file, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
