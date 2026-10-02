import { Locator } from '@playwright/test';

export class CommonMethods {
  static async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  static async enterText(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  static async waitForElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }
}
