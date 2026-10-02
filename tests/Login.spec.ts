import { test, expect } from '@playwright/test';
import { PageObjects } from '../pom/PageObjects';

test('Login', async ({ page }) => {
  const pages = new PageObjects(page);

  // TODO: Add your login flow
  await page.goto('/');
  await expect(page).toHaveTitle(/./);
});
