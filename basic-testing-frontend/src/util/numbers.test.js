import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("Should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("Should yield NaN for non-transformable values", () => {
  const input = "invalid";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
