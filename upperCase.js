//converting first lettrt of every word to upper case
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  let x = titleCase("I'm a little tea pot");
  console.log(x)