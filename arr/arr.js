const hello=() => {
    console.log('Hello World');
}
hello();
setTimeout(() => {
    console.log('Hello World after 2 seconds');
}, 2000);

const nums=[1, 2, 3, 4, 5];
const squares=nums.map((num) => num * num);
console.log(squares);

const sum=nums.reduce((acc, num) => acc + num, 0);
console.log(sum);

const evenNums=nums.filter((num) => num % 2 === 0);
console.log(evenNums);