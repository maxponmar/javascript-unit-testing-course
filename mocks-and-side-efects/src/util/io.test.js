import { it, expect } from "vitest";

import writeData from "./io";

it("Should execute the writeFile method", () => {
  const testData = "Test";
  const testFileName = "test.txt";
  // This test has a side effect, it writes something to the file system
  // side effect => interacting with some other system
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
