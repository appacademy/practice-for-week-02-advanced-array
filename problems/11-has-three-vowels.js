/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let remove = function(string, letter) {
  var index = string.indexOf(letter);
  return string.slice(0, index) + string.slice(index+1);
}

let hasThreeVowels = function(string) {
    // Your code here
    let letters = string.split("");
    var count = 0;
    var vowels = "aeiou";

    return letters.reduce(
      (truth, letter) => {
        console.log(letter);
        console.log(truth);
        if (vowels.includes(letter)) {
            vowels = remove(vowels, letter);
          count++;
          console.log(count);
        }
        return (count >= 3 ? true : false);
      }, false
    );
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
