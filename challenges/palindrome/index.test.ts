import { describe, test, expect } from 'bun:test';
import { isPalindrome } from '.';

describe("isPalindrome", () => {

    describe("Is a palindrome", () => {
        const palindromicWords = [
            "racecar",
            "wow",
            "noon",
            "repaper",
            "Never odd or even.",
            "Red roses run no risk, sir, on Nurse's order.",
            "A man, a plan, a canal, Panama!",
            "Step on no pets!",
            "taco cat",
            "UFO tofu",
            "Don't nod",
            "Was it a car or a cat I saw?",
            "aabbaa",
            "aaaaaaaaaa",
            "aaa aaaaa,a!a",
            "aaaaaaaaaataaaaaaaaaa",
            "..aaaaAaAaa a  T aaaaaaaaaA.",
            "aababaa",
            "aa'bab^a*a",
            "aa",
            "a",
            "12321",
        ];

        palindromicWords.forEach((word) => {
            test(word, () => {
                expect(isPalindrome(word)).toBe(true);
            });
        });
    });

    describe("Is not a palindrome", () => {
        const nonPalindromicWords =[
            "word",
            "racecars",
            "afternoon",
            "RaCCooon",
            "wowoow",
            "worddorw",
            "baababaa",
            "aababaab",
            "ab",
            "",
            "()()()()(£$%%&  ",
            "112"
        ]

        nonPalindromicWords.forEach((word) => {
            test(word, () => {
                expect(isPalindrome(word)).toBe(false);
            });
        });
    })
});