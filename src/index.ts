import { input } from "@inquirer/prompts";

async function sentences() {
  const paragraph: string = await input({
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
