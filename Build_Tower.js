function towerBuilder(nFloors) {
  let space,
      floor, 
      tower = [];
  for(i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    floor  = "*".repeat((2*i) - 1);
    tower.push(`${space}${floor}${space}`);
  }
  return tower;
}
