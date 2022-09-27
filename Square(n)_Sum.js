function squareSum(numbers){
  if(numbers === []){
    return 0;
  }else{
  const arr = numbers.map(el => el*el);
  return arr.reduce((sum, curr) => sum+curr, 0);
    }
}
