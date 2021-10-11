function uniteUnique(arr) {
    let arr2 = [];
  
    for(let i =0;i<arguments.length;i++){
      let arr1 = arguments[i];
      for(let j =0;j<arr1.length;j++){
        if(arr2.indexOf(arr1[j]) < 0){
          arr2.push(arr1[j]);
        }
      }
    }
    return arr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));