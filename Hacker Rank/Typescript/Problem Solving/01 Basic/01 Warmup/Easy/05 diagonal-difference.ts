/*
 Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix
is shown below:
    1   2   3
    4   5   6
    9   8   9

he left-to-right diagonal = . The right to left diagonal = . Their absolute difference is

.

Function description

Complete the

function in the editor below.

diagonalDifference takes the following parameter:

    int arr[n][m]: an array of integers

Return

    int: the absolute diagonal difference

Input Format

The first line contains a single integer,
, the number of rows and columns in the square matrix .
Each of the next lines describes a row, , and consists of space-separated integers

.

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input
    3
    11 2 4
    4 5 6
    10 8 -12

sample Output
    15

Explanation

The primary diagonal is: 
11
      5
            -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:
            4
      5         
10

Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

*/

// function diagonalDifference(arr: number[][]): number {
//     let leftToRight: number = 0;
//     let rightToLeft: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         leftToRight += arr[i][i];
//         rightToLeft += arr[i][arr.length - 1 - i];
//     }
//     return Math.abs(leftToRight - rightToLeft);
// }

'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let primaryDiagonal =0
    let secondaryDiagonal =0
   for(let i=0;i<arr.length;i++){
       primaryDiagonal += arr[i][i]
       secondaryDiagonal += arr[i][arr.length -1-i]
   }
    return Math.abs(primaryDiagonal-secondaryDiagonal)

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
