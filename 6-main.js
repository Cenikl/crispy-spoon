const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) { //2
    return array; //1
  }
  const middle = Math.floor(array.length / 2); //4
  const left = slice(array, 0, middle); //4
  const right = slice(array, middle, array.length); //5
  return merge(sort(left), sort(right)); //5
}

const array = generateUnorderedArray(10);
console.log(array);
console.log(sort(array));

/**
 * T6 = 2(1) + 4 + log(4) + log(5) + log(5) + n*log(5)
 * La complexité temporelle de cette algorithme est la complexité quasi-linéaire O(n*log(n))
 */