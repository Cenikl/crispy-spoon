const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = [];//1
  for (let i = 0; i < size; i++) {//6
    let number = Math.floor(Math.random() * 100);//4
    while (arrayContain(array, number)) {//3
      number = Math.floor(Math.random() * 100);//4
    }
    array.push(number);//2
  }
  return array;//1
}

module.exports = { generateUnorderedArray };

/**
 * T4 = 1 + 6(size-1)(4 + 3 + 4)+ 2 + 1
 * T4 = O(1) + O(n)*O(1) + O(1) + O(1)
 * La complexité temporelle de cette algorithme est la complexité linéaire O(n)
 */