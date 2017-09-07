function map(array,func) {
  resultArray = [];

  for ( var i=0 ; i<array.length ; i++ ) {
    resultArray.push(func(array[i]));
  }
  console.log(resultArray);
}

// Test code

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});