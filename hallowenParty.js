/*Alex is attending a Halloween party with his girlfriend, Silvia. At the party, Silvia spots the corner of an infinite chocolate bar (two dimensional, 
    infinitely long in width and length).

If the chocolate can be served only as 1 x 1 sized pieces and Alex can cut the chocolate bar exactly
times, what is the maximum number of chocolate pieces Alex can cut and give Silvia?*/

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
 * Complete the 'halloweenParty' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER k as parameter.
 */

function halloweenParty(k) {
    if(k%2 ==0){
        let y = k/2
        console.log(y)
        return y*y
    }else{
        let z = Math.floor(k/2)
        console.log(z)
        return z*(k-z)
    }
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const k = parseInt(readLine().trim(), 10);

        const result = halloweenParty(k);

        ws.write(result + '\n');
    }

    ws.end();
}
