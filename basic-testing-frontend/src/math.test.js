import { it, expect } from "vitest";
import { add } from "./math";

it("Should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acum, current) => acum + current, 0);
  expect(result).toBe(expectedResult);
});

it("Should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("Should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (acumulate, currrent) => +acumulate + +currrent,
    0
  );
  expect(result).toBe(expectedResult);
});

it("Should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});
