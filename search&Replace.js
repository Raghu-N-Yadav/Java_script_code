function myReplace(str, before, after) {
    let arr = str.split(' ');
    for(let i=0;i<arr.length;i++){
      if(arr[i] == before){
        if (arr[i][0] == arr[i][0].toUpperCase()){
          after = (after[0].toUpperCase()).concat(after.slice(1));
        }
        else if (arr[i][0] == arr[i][0].toLowerCase())
        {
          after = (after[0].toLowerCase()).concat(after.slice(1));
        }
        arr[i] = after;
        //newStr += arr[i];
      }
    }
    str = arr.join(' ');
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");