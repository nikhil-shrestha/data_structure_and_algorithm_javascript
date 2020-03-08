function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(arr[left]);
    console.log(arr[right]);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      console.log('sum is greater than zero.\nshift from right');
      right--;
    } else {
      console.log('shift from left');
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
