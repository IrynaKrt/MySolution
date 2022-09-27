function solution(string) {
  let res= ''
    if(string === string.toLowerCase() || string ===""){
      return string;
    } 
   const isUpper = (char = '') => char.toLowerCase() !== char.toUpperCase() && char === char.toUpperCase();
   for(let i = 0; i < string.length; i++){
      const el = string[i];
      if(isUpper(el) && i !== 0){
         res += ` ${el}`;
         continue;
      };
      res += el;
   };
   return res;
}
