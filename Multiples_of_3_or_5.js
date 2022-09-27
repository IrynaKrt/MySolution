function solution(number){
  const all =[];
  const arrNum = [];
  
for (let i = 0;  i < number; i++){  //not <=
    all.push(i);
}

for (let i = 0; i < all.length; i++){ //not <=
  if(i % 3 === 0 || i % 5 === 0){
    arrNum.push(i);
  }
}
  const tot = arrNum.reduce((sum, curr) => sum + curr, 0);
  return tot;

}
