import { ChewyPage } from "./pageObjects/chewy-page-object-model";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, promise } from "selenium-webdriver";
//comment for test git
const driver:WebDriver = new Builder()
//another test
  .withCapabilities(Capabilities.chrome())
  .build();

    describe("Chewy Brand page", ()=> {

        const page = new ChewyPage(driver);
        afterAll(async () => {
          await page.driver.quit();
        });
    
    test("Brands Naivgation Works", async () =>{
      await page.navigate();
      await page.clickOnBrandsButton();
      expect(await page.getHeaderTextBrand()).toContain("Shop by Brand");
    })
  })