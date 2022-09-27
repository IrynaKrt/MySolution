function isPangram(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let str = string.toLowerCase(); 
  return alphabet.split('').every(letter => str.includes(letter));
}
