function findLongestWordLength(str) {
    let myArr = str.split(' ');
    let mx  = 0;
    let word = ''
    for(let i = 0; i < myArr.length;i++){
      if(myArr[i].length > mx){
        mx = myArr[i].length;
        word = myArr[i];
      }
    }
    return [mx,word];
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  //console.log(x);