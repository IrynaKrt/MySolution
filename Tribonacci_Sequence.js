//Solution 1
function tribonacci(s,n){
  var arr = [];
  for(var i=0; i<n; i++) {
    arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
  }
  return arr;
}

//Solution 2
function tribonacci(signature, n) {
  if (n === 0) {
    return []
  } else if (n === 1) {
    return [1]
  } else {
    for (let i = 3; i <= n; i++) {
      signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
    }
    signature.pop()
    return signature
  }
}
