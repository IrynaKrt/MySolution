let countBits = function(n) {
  const arr = n.toString(2).split('');
    const res = arr.reduce((sum, num) => sum + Number(num), 0);
  return res
  }
