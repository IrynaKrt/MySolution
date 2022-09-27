function dontGiveMeFive(start, end) {
  let answ = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      answ++;
    }
  }
  return answ;
}
