function factorialize(num) {
    let result = 1;
    if (num === 0){
      return 1;
    }
    else{
      result = factorialize(num-1)* num;
    }
    return result;
  }
  
  console.log(factorialize(5));