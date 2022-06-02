import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("Should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();
    // It pass, even it shouldn't
    // expect(token).toBe(2);

    // If you dont use done(), vitest will call it automatically
    // in this example if we don't use done() it will be called before
    // the expect() is called (because it is asynchronous code)
    // so no matter what you expect, it will allways pass
    // but by using done here we ensure that the expect() function is called
    // before the test finishes.

    // work for passed assertion
    // expect(token).toBeDefined();

    // doesnt work for wrong assertion
    // expect(token).toBe(2);
    // done();

    // solution
    try {
      expect(token).toBeDefined();
      //   expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("Should generate token value", () => {
  const testUserEmail = "test@test.com";

  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("Should generate token value", async () => {
  const testUserEmail = "test@test.com";
  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
});
