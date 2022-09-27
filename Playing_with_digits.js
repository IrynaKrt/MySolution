function digPow(n, p){
  const arr = n.toString();
  let q = 0;      //necessary!
  for(let i = 0; i < arr.length; i++) {
    const x = parseInt(arr.charAt(i),10);
    q +=  Math.pow(x, p + i);
  }
  const t = Math.pow(n, p);
  const k = q / n;
  if(q === t){
    return p;
    } else if(q % n === 0) {
    return k;
  }else {
    return -1;  
  }
}
