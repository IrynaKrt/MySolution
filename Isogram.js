// This is my first solution
function isIsogram(str){
    return !str.match(/([a-z]).*\1/ig) //only these symbols!
}
  
  
// But this is faster and easier to understand 
function isIsogram(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      for(let j = i + 1; j < str.length; j++) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
}
