/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if(str1.length != str2.length){
    return false;
  }
  else{
    while(str1.length != 0){
      strToReplace = str1[0];
      str1 = str1.replace(strToReplace, "");
      str2 = str2.replace(strToReplace, "");
    }
    if(str1.length != str2.length){
      return false;
    }else{
      return true;
    }
  }
}

module.exports = isAnagram;
