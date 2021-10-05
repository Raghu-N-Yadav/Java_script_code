function largestOfFour(arr) {
    let newArr = []
    for(let i = 0; i< arr.length;i++){
      let mx  = Math.max(...arr[i]); /// using spread function to find max in a given subarry
      newArr.push(mx);
    }
    return newArr;
  }
  
  let x = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(x);