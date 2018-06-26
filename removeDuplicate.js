// How would you remove duplicate members from an array?
function removeDuplicate(arr) {
  const obj = {};
  const newArr = [];

  arr.forEach(item => {
    if (!obj[item]) {
      newArr.push(item);
      obj[item] = true;
    }
  });

  return newArr;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
