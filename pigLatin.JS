function translatePigLatin(str) {
    let newStr = '';
    let endStr = '';
    for(let i =0;i<str.length;i++){
      if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u'){
        newStr +=str[i];
      }else if (i > 0){
        
        endStr = str.slice(i);
        break;
      }else{
        return str.concat('way');
      }
    }
    return endStr.concat(newStr+'ay');
  }
  
  translatePigLatin("consonant");