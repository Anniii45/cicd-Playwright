import { test } from '@playwright/test';
import { PageObjects } from '../pom/PageObjects';

test('Loan Creation', async ({ page }) => {
  const pages = new PageObjects(page);

  // TODO: Add your loan creation flow
  await page.goto('/');
});
