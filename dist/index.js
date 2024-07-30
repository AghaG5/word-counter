"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { input } from "@inquirer/prompts";
//async function sentences() {
//  const paragraph: string = await input({
//   message: "Welcome, Type a paragraph and see how many words are there",
//  required: true,
// });
// const numofwords: string = paragraph.trim().split(" ");
// console.log(numofwords);
// console.log(`Number of words = ${numofwords.length}`);
//}
//sentences();
const prompts_1 = require("@inquirer/prompts");
async function sentences() {
    const paragraph = await (0, prompts_1.input)({
        message: "Welcome, Type a paragraph and see how many words are there",
        required: true,
    });
    // Trim the paragraph and split it by spaces, then filter out any empty strings
    const words = paragraph
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
    console.log(words);
    console.log(`Number of words = ${words.length}`);
}
sentences();
