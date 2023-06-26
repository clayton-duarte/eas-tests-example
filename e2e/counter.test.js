describe("Counter", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  //
  it("should render", async () => {
    await expect(element(by.text("Decrement"))).toBeVisible();
    await expect(element(by.text("Increment"))).toBeVisible();
    await expect(element(by.text("0"))).toBeVisible();
  });

  it("should increment counter on 'Increment' tap", async () => {
    await element(by.text("Increment")).tap();
    await expect(element(by.text("1"))).toBeVisible();
    await element(by.text("Increment")).tap();
    await expect(element(by.text("2"))).toBeVisible();
    await element(by.text("Increment")).tap();
    await expect(element(by.text("3"))).toBeVisible();
    await element(by.text("Increment")).tap();
    await expect(element(by.text("4"))).toBeVisible();
    await element(by.text("Increment")).tap();
    await expect(element(by.text("5"))).toBeVisible();
  });

  it("should decrement counter on 'Decrement' tap", async () => {
    await element(by.text("Decrement")).tap();
    await expect(element(by.text("-1"))).toBeVisible();
    await element(by.text("Decrement")).tap();
    await expect(element(by.text("-2"))).toBeVisible();
    await element(by.text("Decrement")).tap();
    await expect(element(by.text("-3"))).toBeVisible();
    await element(by.text("Decrement")).tap();
    await expect(element(by.text("-4"))).toBeVisible();
    await element(by.text("Decrement")).tap();
    await expect(element(by.text("-5"))).toBeVisible();
  });
});
