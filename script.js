let arr = [1, 2, 4, 56, 7, 8, -1, 23];
function findfirstminIndex(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (elem < min) {
      min = elem;
      index = i;
    }
  }
  return index;
}
console.log(`min index is ${findfirstminIndex(arr)}`);
let firstminval = findfirstminIndex(arr);
console.log(`first min value is ${arr[firstminval]}`);

let secondminINDEX = findfirstminIndex(arr);
arr[secondminINDEX] = Number.MAX_SAFE_INTEGER;
const secondMinindex = findfirstminIndex(arr);

console.log(`second min valus  is ${arr[secondMinindex]} `);

function findfirstmaxindex(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > max) {
      max = element;
      index = i;
    }
  }
  return index;
}
console.log(`max index is ${findfirstmaxindex(arr)}`);
