function sumFibs(num) {
  let sum = 1;
  let n1 = 0;
  let n2 = 1;
  let nextNum = 0;
  let i = 1;
  while (nextNum <= num){
      if(nextNum%2 != 0){
        sum +=nextNum;
      }
    nextNum = n1+n2;
    n1= n2;
    n2 = nextNum

  }
  return sum;
}

sumFibs(4);