function alphabetPosition(text) {
  let arr = [];
  let upperCase = text.toUpperCase().split("");
  upperCase.forEach(function(char){
    let curr = char.charCodeAt(0);
    if( curr > 64 && curr < 91){
      arr.push(curr - 64);
    }
  });
  return arr.join(" ");
}
