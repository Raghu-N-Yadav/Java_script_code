function reverseString(str) {
  //1sr method 
    // let myArr = [...str]; // spred string to an array
    // myArr.reverse();
    // str = myArr.join('');
    // return str;

    //2nd method
    let newStr = '' ;
    for (let i = str.length -1;i >=0;i--){
      
      newStr += str[i];
    }
    return newStr
  }
  
  console.log(reverseString("hello"));