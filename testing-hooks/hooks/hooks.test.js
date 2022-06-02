import {
  it,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
} from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user;

beforeAll(() => {
  console.log("beforaAll()");
  user = new User(testEmail);
});
beforeEach(() => {
  console.log("beforeEach()");
  user = new User(testEmail);
});
afterEach(() => {
  console.log("afterEach()");
  // user = new User(testEmail);
});
afterAll(() => {
  console.log("afterAll()");
});

// You can use .concurrent and all test inside will be concurrent
// describe.concurrent()

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it.concurrent(
  "should still have an email property after clearing the email",
  () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  }
);

/*
Even when not adding the .concurrent property / annotation, tests that are stored in different files are executed concurrently (i.e., in parallel). This is done by both Vitest and Jest - ensuring that your tests run in a short amount of time.

With .concurrent you can enforce this behavior also inside the individual files (i.e., tests that live in one and the same file are executed concurrently).

Concurrent execution can reduce the amount of time your tests need to execute. A downside of concurrent execution is, that tests that perform clashing (global) state manipulations may interfere with each other.
*/
