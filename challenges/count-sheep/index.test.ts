import { describe, test, expect } from 'bun:test';
import { countSheep } from "./index";

describe("Count Sheep", () => {

    const countToSentence: Array<[number, string]> = [
        [0, ""],
        [1, "1 sheep..."],
        [2, "1 sheep...2 sheep..."],
        [3, "1 sheep...2 sheep...3 sheep..."],
        [10, "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...7 sheep...8 sheep...9 sheep...10 sheep..."],
    ];

    countToSentence.forEach(([count, sentence]) => {
        test(`Count ${count} sheep`, () => {
            expect(countSheep(count)).toBe(sentence);
        });
    });
});