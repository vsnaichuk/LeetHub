/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxSoFar = -1;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = maxSoFar;
        maxSoFar = Math.max(maxSoFar, current);
    }
    
    return arr;
};