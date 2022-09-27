function pigIt(str){
  const res = str.split(' ')
  return res
    .map((x) => {
      return x.match(/[A-z]/i)
        ? `${x.substr(1)}${x.substr(0, 1)}ay`
        : x
    }).join(' ');
}
