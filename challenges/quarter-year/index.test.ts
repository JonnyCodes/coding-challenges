import { describe, test, expect } from 'bun:test';
import { quarterYear } from "./index";

describe("Quater Year", () => {

    describe("First Quarter", () => {
        [1, 2, 3].forEach((val) => {
            test(`First quarter month: ${val}`, () => {
                expect(quarterYear(val)).toBe(1);
            });
        });
    });

    describe("Second Quarter", () => {
        [4, 5, 6].forEach((val) => {
            test(`Second quarter month: ${val}`, () => {
                expect(quarterYear(val)).toBe(2);
            });
        });
    });

    describe("Third Quarter", () => {
        [7, 8, 9].forEach((val) => {
            test(`Third quarter month: ${val}`, () => {
                expect(quarterYear(val)).toBe(3);
            });
        });
    });

    describe("Fourth Quarter", () => {
        [10, 11, 12].forEach((val) => {
            test(`Fourth quarter month: ${val}`, () => {
                expect(quarterYear(val)).toBe(4);
            });
        });
    });

    describe("Error", () => {
        ["March", null, 54, 0, -5].forEach((val) => {
            test(`Error input: ${val}`, () => {
                expect(quarterYear(val as any)).toBe(-1);
            });
        });
    });
})