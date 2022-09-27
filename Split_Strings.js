function solution(str){
  const arr = [...str];
  const ret= []; // necessarily
  for(let i = 0; i<arr.length; i+=2) { // not i++!
    if(arr[i+1]){
      ret.push(arr[i]+arr[i+1]);
    } else{
      ret.push(arr[i]+'_');
    }
  }
return ret
}
