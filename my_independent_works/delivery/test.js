
function absentNumber(array) {
  const newArray = [];
  newArray.length = array.length + 1;
  array.forEach(item => newArray.push(item));
  const sortArr = newArray.sort((a, b) => a - b);
  const result = sortArr.find(item => (item / (sortArr.indexOf(item) + 1)) !== ((item + 1) / (sortArr.indexOf(item) + 2)));
  if (isNaN(result)) {
      return array.length + 1;
  } 
      return (result - 1);
}
const arr = [2, 1];
console.log(absentNumber(arr));
// console.log(arr.sort((a, b) => a - b));

