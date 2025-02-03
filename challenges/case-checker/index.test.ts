import { describe, test, expect } from 'bun:test';
import { caseChecker } from '.';

describe("Case Checker", () => {

    describe("Is same case", () => {
        const inputs = [
            ["a", "b"],
            ["Z", "T"],
            ["a", "a"],
            ["K", "P"],
            ["q", "s"],
            ["I", "L"],
            ["w", "e"],
            ["R", "M"],
        ];

        inputs.forEach((inputArr) => {
            test(`${inputArr[0]} === ${inputArr[1]}`, () => {
                expect(caseChecker(inputArr[0], inputArr[1])).toBe(1);
            });
        });
    });

    describe("Is not same case", () => {
        const inputs = [
            ["a", "B"],
            ["z", "T"],
            ["A", "a"],
            ["K", "p"],
            ["q", "S"],
            ["I", "l"],
            ["W", "e"],
            ["r", "M"],
        ];

        inputs.forEach((inputArr) => {
            test(`${inputArr[0]} !== ${inputArr[1]}`, () => {
                expect(caseChecker(inputArr[0], inputArr[1])).toBe(0);
            });
        });
    });

    describe("Is an error", () => {
        const inputs = [
            ["a", "1"],
            ["!", "T"],
            ["&", "+"],
            ["aa"],
            ["gg", "p"],
            ["F", "SS"],
            ["I", "%"],
            ["", ""],
            ["ǧ", "g"],
            ["u", "😀"],
            ["ϖ", "ϖ"],
            [null, "n"],
            [, "J"],
            [undefined, "J"],
            [, "J"],
            [3, "v"],
            ["a", {foo: "bar"}],
            [["l"], ["o"]],
            [7, 0],
        ];

        inputs.forEach((inputArr) => {
            test(`${inputArr[0]} !== ${inputArr[1]}`, () => {
                expect(caseChecker(inputArr[0] as any, inputArr[1] as any)).toBe(-1);
            });
        });
    });
});