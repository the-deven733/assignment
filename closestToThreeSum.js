function closestToThreeSum(givenArray,target){
  
  var arr = sortedArray(givenArray);
  console.log(arr);
 
  let sum = arr[0] + arr[1] + arr[2];
  
  for (let i = 0; i < arr.length; i++) {
              var begin = i + 1; 
              var end = arr.length - 1;
    
            while (begin < end) {
                    let newSum = arr[i] + arr[begin] + arr[end];
                    if (Math.abs(target - newSum) < Math.abs(target - sum)) {
                        sum = newSum ;
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



function sortedArray(ar){
   
  var temp;
  
  for(var  i=0; i<ar.length; i++){
      for(var j=0; j<ar.length-i-1; j++){
                if(ar[j] > ar[j+1])
                   {
                      temp = ar[j];
                      ar[j] = ar[j+1];
                      ar[j+1] = temp;
                   }
             }
        }

  return ar;
}



var result = closestToThreeSum([ -5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5, -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6, -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10, 1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9, -2, 7, 0, -4, -3, 1, 6, -3 ],-1) ;

console.log(result);

//  ;

//threeSumClosest([-1,2,1,-4], 1);


