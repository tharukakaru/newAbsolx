import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1024 });
await page.goto("http://localhost:5173/newmegha", { waitUntil: "domcontentloaded" });
await page.evaluate(() => document.fonts.ready);
console.log(
  JSON.stringify(
    await page.evaluate(() => {
      const title = document.querySelector(".megha-uas-title").getBoundingClientRect();
      const hangar = document
        .querySelector(".x-striker-profile__hangar-title")
        .getBoundingClientRect();
      return {
        titleTop: title.top,
        titleBottom: title.bottom,
        hangarTop: hangar.top,
        titleToHangarGap: hangar.top - title.bottom,
        centered: Math.abs(title.left + title.width / 2 - innerWidth / 2) < 0.1,
        overflow: document.documentElement.scrollWidth > innerWidth,
      };
    }),
    null,
    2,
  ),
);
await browser.close();
