function high(s){
  let word = s.split(' ').map(s => [...s].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
  );
  return s.split(' ')[word.indexOf(Math.max(...word))];
}
