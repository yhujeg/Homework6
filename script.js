// задание 1
// const num = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i <= num.length; i++) {
//     console.log(num[i]);
//     if (num[i] === 10)  {
//         break;
//     }
// }

// задание 2
// const arr = [1, 5, 4, 10, 0, 3];

// console.log(arr.indexOf(4));

// задание 3
// const amount = [1, 3, 5, 10, 20];

// console.log(amount.join(" "));

// задание 4
// const digits = [];

// for (let i = 0; i < 3; i++) {
//   digits.push([]);
//   for (let j = 0; j < 3; j++) {
//     digits[i].push(1);
//   }
// }

// console.log(digits);

// задание 5
// const numbers = [1, 1, 1];

// console.log(numbers.concat(2, 2, 2));


//задание 6
// const letter = "a";
// const randomNum = [9, 8, 7, 'a', 6, 5];

// const result = randomNum.filter((el) => el !== letter);

// console.log(result.sort());

// задание 7
// const numGuess = [9, 8, 7, 6, 5];

// const userAnswer = parseInt(prompt("Угадай число"), 10);

// const rightAnswer = numGuess.includes(userAnswer);

// if (rightAnswer) {
//   alert("Угадал!");
// } else {
//   alert("Не угадал.");
// }

// задание 8
// const str = 'abcdef';

// const reversedStr = str.split('').reverse().join('');

// console.log(reversedStr);

// задание 9
// const numb = [[1, 2, 3,],[4, 5, 6]];

// const mergedNumb = numb.flat();

// console.log(mergedNumb);

// задание 10
// const numArr = [2, 9, 7, 6, 4];

// for (let i = 0; i < numArr.length; i++) {
//   if (i === numArr.length - 1) {
//   } else {
//     console.log(numArr[i] + numArr[i + 1]);
//   }
// }

// задание 11
// function squareArray(numbers) {
//     return numbers.map((number) => number * number);
//   }

// const numbersArr = [1, 2, 3, 4, 5];

// const squareNumbers = squareArray(numbersArr);

// console.log(squareNumbers);

// задание 12
// function getLengthWords(words) {
//     return words.map((word) => word.length);
//   }

// const words = ['слово', '', 'слог', 'длинное предложение', 'буква',];

// const lengths = getLengthWords(words);
  
// console.log(lengths); 

// задание 13
// function filterPositive() {
//     return nonFiltered.filter((number) => number < 0);
//   }

// const nonFiltered = [-1, 0, 5, -10, 56]; 

// const filtered = filterPositive();
// console.log(filtered);