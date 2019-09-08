
//////////////// Main function //////////////////

function closestToThreeSum(givenArray, target) {

  var arr = sortedArray(givenArray);
  var size = arr.length;
  //console.log(arr);

  var sum = arr[0] + arr[1] + arr[2];

  for (var i = 0; i < size; i++) {

    var begin = i + 1;
    var end = size - 1;

    while (begin < end) {
      var newSum = arr[i] + arr[begin] + arr[end];
      if (Math.abs(target - newSum) < Math.abs(target - sum)) {
        sum = newSum;
      }

      if (newSum < target) {
        begin = begin + 1;
      } else {
        end = end - 1;
      }
    }
  }
  return sum;
};


/////////// a function to sort the given array... //////////

function sortedArray(ar) {

  var temp;

  for (var i = 0; i < ar.length; i++) {
    for (var j = 0; j < ar.length - i - 1; j++) {
      if (ar[j] > ar[j + 1]) {
        temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;
      }
    }
  }

  return ar;
}





