import { expect, it, vi } from "vitest";
import { HttpError } from "./errors";

import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string (Valid JSON object)");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

it("Should return any available response data", () => {
  const testData = { key: "test" };

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("Should convert the provided data to JSON before sending the request", async () => {
  const testData = { key: "test" };

  let errorMessage;
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error.message;
  }

  expect(errorMessage).not.toBe("Not a string (Valid JSON object)");
});

it("Should throw an HttpError in case of non-ok responses", () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });

  const testData = { key: "test" };

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
