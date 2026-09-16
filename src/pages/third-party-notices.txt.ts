import notices from "../../THIRD_PARTY_NOTICES.md?raw";
import astroLicense from "../../licenses/ASTRO-LICENSE?raw";
import atomOneLicense from "../../licenses/ATOM-ONE-SYNTAX-LICENSE?raw";
import flexokiLicense from "../../licenses/FLEXOKI-LICENSE?raw";
import geistLicense from "../../licenses/GEIST-LICENSE.txt?raw";
import suitLicense from "../../licenses/SUIT-LICENSE.txt?raw";
import tailwindCssLicense from "../../licenses/TAILWIND-CSS-LICENSE?raw";
import tailwindTypographyLicense from "../../licenses/TAILWIND-TYPOGRAPHY-LICENSE?raw";

const sections = [
  ["THIRD-PARTY NOTICES", notices.replace(/^# Third-party notices\s*/, "")],
  ["ASTRO LICENSE", astroLicense],
  ["TAILWIND CSS LICENSE", tailwindCssLicense],
  ["TAILWIND TYPOGRAPHY LICENSE", tailwindTypographyLicense],
  ["FLEXOKI LICENSE", flexokiLicense],
  ["ATOM ONE SYNTAX THEMES LICENSE", atomOneLicense],
  ["GEIST LICENSE", geistLicense],
  ["SUIT LICENSE", suitLicense],
] as const;

const body = sections
  .map(
    ([title, text]) =>
      `${"=".repeat(80)}\n${title}\n${"=".repeat(80)}\n\n${text.trim()}`,
  )
  .join("\n\n");

export function GET() {
  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
