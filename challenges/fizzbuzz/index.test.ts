import { describe, test, expect } from 'bun:test';
import { fizzBuzz } from '.';

describe("Fizz Buzz", () => {

    test("Fizz numbers", () => {
        [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72, 78, 81, 84, 87, 93, 96, 99].forEach((val) => {
            expect(fizzBuzz(val)).toBe("Fizz");
        });
    });

    test("Buzz numbers", () => {
        [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95].forEach((val) => {
            expect(fizzBuzz(val)).toBe("Buzz");
        });
    });

    test("FizzBuzz numbers", () => {
        [0, 15, 30, 45, 60, 75, 90].forEach((val) => {
            expect(fizzBuzz(val)).toBe("FizzBuzz");
        });
    });
});