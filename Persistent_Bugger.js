function persistence(num) {
    let i = 0;
    let res;
    if(num.length === 1){
      return num;
    } else if(Number.isInteger(num) == true){
  
      while(num >= 10){
        res = (num + "").split("");
        num = res.reduce((acc,val) => acc * val);
        i+=1;
        
      } 
      return i;
    }
}
  