function expandedForm(num) {
 let x = num.toString().split('');
  
 for(let i = 0; i < x.length; i++ ){
      if(x[i] != 0){
      for(let j = (x.length-i); j > 1; j--){
         x[i] += '0'; 
      }
     }
  }
  return x.filter(item => item != '0').join(' + ');
}
