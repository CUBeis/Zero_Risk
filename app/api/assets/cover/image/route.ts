import { promises as fs } from "node:fs";
import path from "node:path";

export async function GET() {
  const imagePath = path.join(
    process.cwd(),
    "app",
    "api",
    "assets",
    "cover",
    "Cover.jpeg",
  );
  const file = await fs.readFile(imagePath);

  return new Response(file, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
