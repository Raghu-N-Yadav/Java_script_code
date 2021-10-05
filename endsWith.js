function confirmEnding(str, target) {
    // let strRegex = /target$/;
    // let end = strRegex.test(str);
    let x = str.slice(str.length - target.length); /// copying a substring from given string
    if(x === target){
      return true;
    }
    return false;
  }
  
  let y = confirmEnding("Bastian", "n");
  console.log(y);