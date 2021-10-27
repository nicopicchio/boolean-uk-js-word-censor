/*
Description
Our program takes in text, a list of words to censor, what to censor them with (**, BEEP, xxx, !!!, etc), and it returns a censored version of the text.
- Use the provided string as an input
- Create a function that censors the text input
- print out the censored text

Challenge 1
Together with the new censored version, return a count of how many words were censored in the original text.

Challenge 2**
Instead of using hard-coded inputs, use prompts to grab:
- The full text to censor
- The words to be censored
- What should replace the censored words
*/

const textToScan = prompt("Please enter the text that you want to censor");

const bannedWords = prompt("Please enter the words you would like to ban");

const replacementWord = prompt("Please enter your replacement word");

function wordCensor (textToScan, bannedWords, replacementWord) {
    const textToScanArray = textToScan.split(" ");
    const bannedWordsArray = bannedWords.split(" ");
    console.log(textToScanArray);
    console.log(bannedWordsArray);
    for (let i = 0; i < textToScanArray.length; i++) {
        for (let j = 0; j < bannedWordsArray.length; j++) {
            if (textToScanArray[i] === bannedWordsArray[j]) {
                textToScanArray[i] = replacementWord;
            }
        }
    }
    const censoredVersion = textToScanArray;
    console.log(censoredVersion);
    const userCensoredVrs = censoredVersion.join(" ");
    alert(userCensoredVrs);
}

wordCensor (textToScan, bannedWords, replacementWord);