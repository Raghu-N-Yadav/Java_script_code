function frankenSplice(arr1, arr2, n) {
    let newArr = [...arr2]; // spreading arr2 in newArr i.e making a copy
    newArr.splice(n,0,...arr1); //using splice to add arr1 into arr2 at index n
    return newArr;
  }
  
let x =  frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(x);