import test, { expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

test("See Home page", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Weekly Submissions" }),
  ).toBeVisible();
});

test("la page dashboard ne viole pas WCAG", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();

  // Objectif : 0 violation critique

  const critical = results.violations.filter((v) =>
    ["critical", "serious"].includes(v.impact ?? ""),
  );

  console.log(critical);
  expect(critical.length).toEqual(0);
});
