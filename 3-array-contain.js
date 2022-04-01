function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) {//6
    if (array[i] === number) {//3
      return true;//1
    }
  }
  return false;//1
}

module.exports = { arrayContain };

/**
 * T3 = 6(array.length-1)(3 + 1) + 1 = 24n + 1
 * T3 = O(n)*O(1) + O(1)
 * La complexité temporelle de cette algorithme est la complexité linéaire O(n)
 */