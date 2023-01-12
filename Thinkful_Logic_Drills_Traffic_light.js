function updateLight(current) {
  if(current === 'red') {
    return 'green';
  } else if(current === 'yellow') {
    return 'red';
  } else if(current === 'green') {
    return 'yellow';
  }
}
