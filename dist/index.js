#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
async function sentences() {
    const paragraph = await (0, prompts_1.input)({
        message: "Welcome, Type a paragraph and see how many words are there",
        required: true,
    });
    const words = paragraph
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
    console.log(words);
    console.log(`Number of words = ${words.length}`);
}
sentences();
