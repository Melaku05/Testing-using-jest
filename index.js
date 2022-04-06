function stringLength(string) {
  return string.length;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(stringLength('hello'));
console.log(reverseString('hello'));
module.exports = { stringLength, reverseString };
