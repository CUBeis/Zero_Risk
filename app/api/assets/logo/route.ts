import { promises as fs } from "node:fs";
import path from "node:path";

export async function GET() {
  const candidates = [
    path.join(process.cwd(), "public", "logo.jpeg"),
    path.join(process.cwd(), "..", "logo.jpeg"),
  ];

  for (const logoPath of candidates) {
    try {
      const file = await fs.readFile(logoPath);
      return new Response(file, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=3600",
        },
      });
    } catch {
      // Try next location.
    }
  }

  // Fallback so branding area stays visible in production
  // even if logo.jpeg is missing from deployment files.
  const fallbackSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="100" fill="#cc0000"/>
      <text x="100" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#ffffff">ZR</text>
      <text x="100" y="122" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="#ffffff">ZERO RISK</text>
    </svg>
  `;

  return new Response(fallbackSvg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
