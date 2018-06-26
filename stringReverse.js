// How would you reverse a string in JavaScript?
function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverse('wow thats a cool sweater!'));
