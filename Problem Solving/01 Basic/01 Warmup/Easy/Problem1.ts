// Complete the function solveMeFirst to compute the sum of two integers.

// Example
// a=7
// b=3
// Return 10.


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function stringArrayToNumberArray(stringArray: string[]) {
    const numberArray: number[] = []
    for (let i = 0; i < stringArray.length; i++) {
        numberArray.push(Number(stringArray[i]))
    }
    return numberArray
}

function calculateSumOfArray(inputArray: number[]) {
    let answer = 0
    for (let i = 0; i < inputArray.length; i++) {
        answer += inputArray[i]
    }
    return answer
}

function main() {

    const numberArray = stringArrayToNumberArray(inputLines)
    const answer = calculateSumOfArray(numberArray)
    console.log(answer)

    // Enter your code here
}
