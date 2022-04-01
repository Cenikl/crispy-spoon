function merge(array1, array2) {
  let mergedArray = []; //1
  let i = 0; //1
  let j = 0; //1
  while (i < array1.length && j < array2.length) { //7
    if (array1[i] < array2[j]) { //3
      mergedArray.push(array1[i]); //2
      i++; //2
    } else {
      mergedArray.push(array2[j]); //2
      j++; //2
    }
  }
  while (i < array1.length) { //3
    mergedArray.push(array1[i]); //2
    i++; //2
  }
  while (j < array2.length) { //3
    mergedArray.push(array2[j]); //2
    j++; //2
  }
  return mergedArray; //1
}

module.exports = { merge };

/**
 * T2 = 1 + 1 + 1 + 7n(3 + 2 + 2 + 2 + 2) + 3n(2 + 2) + 3n(2 + 2) + 1 = 4 + 77n + 12n +12n = 4 + 101n
 * T2 = O(1) + O(1) + O(1) + O(n)*O(1) + O(n)*O(1) O(n)*O(1) + O(1)
 * La complexité temporelle de cette algorithme est la complexité linéiare O(n)
 */