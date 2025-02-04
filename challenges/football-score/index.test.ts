import { describe, test, expect } from 'bun:test';
import { footballScore } from "./index";

describe("Football Score", () => {

    const scoreToMatches: Array<[number, string[]]> = [
        [5, ["0:1", "1:1", "1:0", "1:2", "0:0", "0:2"]],
        [1, ["0:0", "0:1", "0:2", "1:2", "2:3", "0:2"]],
        [0, ["0:3", "0:1", "0:2", "1:2", "2:3", "0:2", "1:2", "0:3", "0:1", "0:2", "1:2", "2:3", "0:2", "1:2"]],
        [10, ["1:0", "2:1", "2:2", "1:2", "0:1", "4:2"]],
        [3, ["1:0", "1:2", "2:6", "1:2", "0:1", "0:2"]],
        [1, ["0:0"]],
        [0, []],
    ];

    scoreToMatches.forEach(([score, matches]) => {
        test(`${score}`, () => {
            expect(footballScore(matches)).toBe(score);
        });
    });
});