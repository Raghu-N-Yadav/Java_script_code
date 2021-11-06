/*Watson gives an integer N to Sherlock and asks him: What is the number of divisors of N that are divisible by 2? */

function divisors(n) {
    let count =0
    // if(n%2 != 0){
    //     return 0
    // }
    for(let i = 1;i<= Math.sqrt(n);i++){
        if(n%i ==0){
            if(i%2 ==0){
                count++
            }
            if(n/i !=i){
                if((n/i)%2 == 0){
                    count++
                }
            }

        }
    }
    return count
    // Write your code here

}

console.log(divisors(10));