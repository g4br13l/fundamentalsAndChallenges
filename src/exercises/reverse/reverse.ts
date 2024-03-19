/*
First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders"
then your program should return the string sredoC dna dlroW olleH.
Examples: Input: "coderbyte", Output: etybredoc   |   Input: "I Love Code", Output: edoC evoL I    */

function FirstReverse(str) {

    let letters = str.split('');
    let reversed = letters.reverse().join('');
    return reversed;

    /*let reversed: string = '';
    let letters = str.split('');

    for (let i = letters.length; i--; i == 0) {
        reversed = reversed + letters[i];
        console.log('letters[i] => ', letters[i]);
    }
    return reversed;*/
}


console.log('OK');
console.log('resultado final => ', FirstReverse('abcd'));

