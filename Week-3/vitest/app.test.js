import { test, expect } from "vitest";
import { add } from "./app";
import { subtract } from "./app";
import { multiply } from "./app";
import { divide } from "./app";

test("add function adds two numbers", function () {
  const result = add(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});

test("subtract function subtracts two numbers", function () {
  const result = subtract(1, 2);
  const expected = -1;
  expect(result).toBe(expected);
});

test("multiply function multiplies two numbers", function () {
  const result = multiply(6, 6);
  const expected = 36;
  expect(result).toBe(expected);
});

test("divide function divides two numbers", function () {
  const result = divide(100, 4);
  const expected = 25;
  expect(result).toBe(expected);
});
