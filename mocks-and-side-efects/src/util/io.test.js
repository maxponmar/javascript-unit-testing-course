import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");

it("Should execute the writeFile method", () => {
  const testData = "Test";
  const testFileName = "test.txt";
  // This test has a side effect, it writes something to the file system
  // side effect => interacting with some other system
  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

  writeData(testData, testFileName);

  expect(fs.writeFile).toBeCalled();
});
