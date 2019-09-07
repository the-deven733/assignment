function getCharacterFrequency(word) {
  
    var result = {};
  
    for (var j = 0; j < word.length; j++) {
     
      var character = word.charAt(j);

      if (!result[character]) {
        result[character] = 1;
      }
      else {
        result[character] =  result[character] + 1;
      }
    }
   return result;
 }


function isEqual(obj1,obj2){
  var flag = true;
  
  if(Object.keys(obj1).length === Object.keys(obj2).length){
     for(var [key,value] of Object.entries(obj2)){
              //console.log(key,value);
                if(obj1[key]!==value){
                flag = false;
                break;
              }
           }
     }
  else{
    flag = false;
  }
   return flag;
}


function checkAnagram(wordsList){
  var new_array = [];
  var resultant_array = [];
  
  for(var i=0; i< wordsList.length; i++){
    var word = wordsList[i];
    var characterFrequency = getCharacterFrequency(word);
    new_array.push(characterFrequency);
  }
  //console.log(new_array);
 
  var new_arr_length = new_array.length;
  var flag = 0;
 
  for(var j=0; j<new_arr_length; j++){
    for(var k=j+1; k<new_arr_length; k++){
      if(isEqual(new_array[j],new_array[k])){
        //console.log("Anagrams  are: " + j + " and " + k)
        resultant_array.push([j,k]);
        flag = 1
      }
    }
  }
  if(flag==0){
    return ("There isn't any anagram pairs in the given array!") ;
  }
 
  return resultant_array;
}






var res = checkAnagram(given_arr);

console.log(res);


