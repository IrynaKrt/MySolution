function friend(friends){
  return friends.filter(function(name) {
    return name.length === 4;
  });
}
