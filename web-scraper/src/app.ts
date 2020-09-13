const puppeteer = require("puppeteer");

const chromeOptions = {
  executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  headless: false,
  slowMo: 10,
  defaultViewport: null,
};

(async () => {
  const browser = await puppeteer.launch(chromeOptions);
  const page = await browser.newPage();
  await page.goto("https://www.zillow.com/homes/Meridian,-ID_rb/");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
