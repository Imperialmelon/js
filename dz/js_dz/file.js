function f1(){ // task 20
    function combineArrays(...arrays) {
        let combined = [];
        arrays.forEach(array => {
          combined = combined.concat(array);
        });
        combined.sort((a, b) => b - a);
        return combined.join(' ');
      }
      
      let first = [1, 2, 3];
      let second = [-1, -10, 20];
      let third = [100,108,11];
      
      let result = combineArrays(first, second, third);
      console.log(result);
}

function f2(){ // task 23
    function removeValues(arr, ...valuesToRemove) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
          if (!valuesToRemove.includes(arr[i])) {
            result.push(arr[i]);
          }
        }
        return result;
      }
      
      let initialArray = [1, 2, 3, 1, 2];
      let resultArray = removeValues(initialArray, 1);
      console.log(resultArray);      
}

let arr = [1,2,3]
arr.push(88,77,-1)
arr.sort()
console.log(arr)