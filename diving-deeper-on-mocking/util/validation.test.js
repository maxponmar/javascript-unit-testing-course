import { expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

it("Should throw an error if an empty string is provided as a value", () => {
  const testInput = "";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it("Should throw an error if an empty string is provided as a value", () => {
  const testInput = "  ";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it("Should throw an error with the provided error message", () => {
  const testInput = "  ";
  const testErrorMessage = "test";

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow(testErrorMessage);
});
