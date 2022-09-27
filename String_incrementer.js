function incrementString (strng) {
  return strng.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
}
