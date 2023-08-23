const max = Math.max(6, 33, 55, 1, 89, 440)
console.log(max);


const numbers = [3, 4, 56, 65, 33, 90, 44, 99, 30, 299];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// USE spread operator to copy 
const friends = [23, 34, 66, 9];
const bondhu = friends;
bondhu.push(12);
console.log(bondhu);