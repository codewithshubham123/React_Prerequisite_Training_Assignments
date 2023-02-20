// Write a JavaScript program to check if the characters a and b are separated by exactly 3 
// places anywhere (at least once) in a given string.


function ab_Check(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }
 
 console.log(ab_Check("shubhampatil"));
console.log(ab_Check("patilshubham"));
console.log(ab_Check("abcdefga"));


 