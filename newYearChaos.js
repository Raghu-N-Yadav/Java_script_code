

'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // let b =0;
    // //console.log(q)
    //let x  = [...q]
    // let d = 0;
    //let y = x.sort()
    // for (let i of q){
    //     d = y.indexOf(i) - q.indexOf(i)
    //     if(0 <= d <= 2){
    //         b+=d
    //     }
    //     if(d > 2){
    //         //return console.log('Too chaotic')
    //     }
    //     console.log(d)
    // }
    //  //console.log(b)
     
     
     
     
    //console.log(y)
    let j =q.length;
    let b = 0;
    for(let i = q.length-1 ; i>=0;i--){
        if(q[i] != j ){
            if(j == q[i-1]){
                b++
                //let tem = j
                
                q[i-1] = q[i]
                q[i] = j;
            } else if (j == q[i-2]){
                b+=2
                q[i-2] = q[i-1]
                q[i-1] = q[i]
                q[i] = j;
            }else{
                return console.log('Too chaotic')
            }

        }
        //console.log(q.indexOf(i))
        j--
    }
    console.log(b)
    //console.log(q)
    // Write your code here

}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
