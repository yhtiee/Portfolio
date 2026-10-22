// Regenerates public/Utibeabasi-Ekpenyong-Resume.pdf from the /resume page so the
// downloadable CV always matches the site. Needs the site running (npm run dev).
//
//   npm run resume:pdf                    # uses http://localhost:3000/resume
//   npm run resume:pdf -- <url>           # any other running instance
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const url = process.argv[2] ?? "http://localhost:3000/resume";
const output = resolve("public/Utibeabasi-Ekpenyong-Resume.pdf");

const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
    console.error("No Chrome/Edge found. Set CHROME_PATH to a Chromium-based browser.");
    process.exit(1);
}

const res = await fetch(url).catch(() => null);
if (!res?.ok) {
    console.error(`Could not load ${url}. Start the site first (npm run dev).`);
    process.exit(1);
}

execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=10000",
    `--print-to-pdf=${output}`,
    url,
], { stdio: "inherit" });

console.log(`Resume PDF written to ${output}`);
