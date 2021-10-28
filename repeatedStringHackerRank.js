/*
There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , 
find and print the number of letter a's in the first  letters of the infinite string. */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    let num = Math.floor(n/s.length);
    //let str = s.repeat(num+1);
    let newStr = s.slice(0,n%(s.length))
    let count =0;
    s.split('').forEach((val) => {
        if (val == 'a')
        count ++
    })
    let c = 0;
    newStr.split('').forEach((val) => {
        if(val == 'a'){
            c++
        }
    })
    return count*num+c;
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
