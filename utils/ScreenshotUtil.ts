import { Page } from '@playwright/test';

export class ScreenshotUtil {
  static async capture(page: Page, filePath: string): Promise<void> {
    await page.screenshot({
      path: filePath,
      fullPage: true,
    });
  }
}
