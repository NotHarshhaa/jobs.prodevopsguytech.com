import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const SEARCH_URL = "https://www.naukri.com/devops-cloud-jobs?k=devops%20cloud&experience=0";
const TITLE_KEYWORDS = ["devops", "aws", "azure"];

function slugify(text: string) {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}

(async () => {
  console.log("Launching headless browser…");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0");

  console.log("Loading Naukri search page…");
  await page.goto(SEARCH_URL, { waitUntil: "networkidle2", timeout: 60000 });

  await page.waitForSelector("article.jobTuple");

  const jobs = await page.evaluate((TITLE_KEYWORDS) => {
    const jobCards = document.querySelectorAll("article.jobTuple");
    const results: any[] = [];

    jobCards.forEach((el, i) => {
      const titleEl = el.querySelector("a.title");
      const companyEl = el.querySelector("a.subTitle");
      const locationEl = el.querySelector("li.location");
      const salaryEl = el.querySelector("li.salary");
      const expEl = el.querySelector("li.experience") || el.querySelector(".expwdth");

      const title = titleEl?.textContent?.trim() || "";
      const link = titleEl?.getAttribute("href") || "";
      const companyName = companyEl?.textContent?.trim() || "";
      const location = locationEl?.textContent?.trim() || "";
      const salaryText = salaryEl?.textContent?.trim() || "";
      const expText = expEl?.textContent?.trim() || "";

      const t = title.toLowerCase();
      if (!TITLE_KEYWORDS.some((kw: string) => t.includes(kw))) return;

      const now = new Date().toISOString();
      let salary: number | null = null;
      const m = salaryText.match(/\d+/);
      if (m) salary = parseInt(m[0], 10) * 100000;

      results.push({
        id: uuidv4(),
        slug: `${title.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
        title,
        type: "Full-time",
        companyName,
        locationType: location.toLowerCase().includes("remote") ? "Remote" : "On-site",
        location,
        applicationEmail: "",
        applicationUrl: link,
        description: `Looking for a ${title} with ${expText}. Apply at ${link}`,
        salary,
        approved: true,
        createdAt: now,
        updatedAt: now,
      });
    });

    return results;
  }, TITLE_KEYWORDS);

  console.log(`→ Extracted ${jobs.length} jobs`);

  // Save to jobs.json
  const dataDir = path.join(process.cwd(), "src", "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const outFile = path.join(dataDir, "jobs.json");
  fs.writeFileSync(outFile, JSON.stringify(jobs, null, 2));

  console.log(`✅ Saved ${jobs.length} jobs to ${outFile}`);
  await browser.close();
})();
