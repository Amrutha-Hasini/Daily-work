function App()
{
let arr = [1, 2, 3, 4, 5];

let evenNum = arr.filter(num => num % 2 === 0);
//for subset in array we use map

let isOddArray = arr.map(num => (num % 2)!== 0);
console.log(isOddArray);

let sum = arr.reduce((acc, num) => acc + num, 0);//sum is called as accumulator
//to get single output we use reduce
console.log(sum); // 15
}
