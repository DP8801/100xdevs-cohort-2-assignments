/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // using regex removed non alphanumeric charaters
  str = str.replaceAll(/\W/g, "")
  first = 0;
  last = str.length-1;

  // checking palindrome
  while(first<last){
    // if(str[first].)
    if(str[first].toLowerCase() != str[last].toLowerCase()){
      return false;
    }
    first++;
    last--;
  }

  return true;
}

module.exports = isPalindrome;