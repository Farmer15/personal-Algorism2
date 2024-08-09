/**
 * Given an arbitrary input string, return the first non-repeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AABCABD'); // => 'C'
 */

export default function firstNonRepeatedCharacter(str) {
  function include(string,phrase){
    let count = 0;
    for (const value1 of string){

        if (value1 === phrase){
          count ++;
        }
        if((value1 === phrase) && count >=2 ){
          return true
        }
      }
    return false
  }
  for (const value2 of str){
    if (!include(str,value2)){
      return value2
    }
  }
}
