import { expect, it } from "vitest";
import { generateToken } from "./async-example";

it("Should generate a token value", () => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();
    // It pass, even it shouldn't
    expect(token).toBe(2);
  });
});
