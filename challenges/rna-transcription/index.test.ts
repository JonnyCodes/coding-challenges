import { describe, test, expect } from 'bun:test';
import { rnaTranscription } from "./index";

describe("RNA Transcription", () => {

    const DNAtoRNA: Array<[string, string]> = [
        ["GCTA", "CGAU"],
        ["GCTAACTGTGATGGGCATATAGACCCT", "CGAUUGACACUACCCGUAUAUCUGGGA"],
        ["TTTGGGCCCAAACCCGGTTGATATACGACCCGTGAC", "AAACCCGGGUUUGGGCCAACUAUAUGCUGGGCACUG"],
        ["G", "C"],
        ["C", "G"],
        ["T", "A"],
        ["A", "U"],
    ];

    DNAtoRNA.forEach(([DNA, RNA], index) => {
        test(`DNA to RNA: ${index}`, () => {
            expect(rnaTranscription(DNA)).toBe(RNA);
        });
    });
});