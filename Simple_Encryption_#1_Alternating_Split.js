function encrypt(text, n) {
      if(n  <= 0 || !text){ //better to leave such a condition!
        return text
      } 
  let first = text.split('').filter((elem, i) => i%2 === 1);
  let second = text.split('').filter((elem, i) => i%2 === 0);
  return  encrypt(first.concat(second).join(""), n-1);
}

function decrypt(encryptedText, n) {
      if(n<= 0 || !encryptedText){  // and here, otherwise there will be an error!
        return encryptedText
      } 
    let m = encryptedText.length/2;
    let first =  encryptedText.split('').slice(m);
    let second =  encryptedText.split('').slice(0, m);
  
  let arr = [];
    for(let i = 0; i < encryptedText.length; i++ ){
      if(i%2 === i-1){
      arr.push(second[i]);
      arr.push(first[i]);
        } else{
        arr.push(first[i]);
        arr.push(second[i]);
        }
    }
  return decrypt(arr.join(""), n-1);
}
