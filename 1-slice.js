function slice(array, start, end) {
  let slicedArray = [];//1
  for (let i = start; i < end; i++) {//7
    slicedArray.push(array[i]);//2
  }
  return slicedArray;//2
}

module.exports = { slice };

/* 
*T1 = 1 + 7(end-1)(2)+ 1 = 2 + 14n
*
*T1 = O(1) + O(n)*O(1) + O(1)
*Le complexité temporelle de cette algorithme est la complexité linéaire O(n)
*/
