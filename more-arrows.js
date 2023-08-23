
// single parameter or one parameter
const getage = (person) => person.age;
const student = {name: 'ananata', age: 45}
const age = getage(student);
console.log(age);


const getThird = Numbers => Numbers[2];
const third = getThird([45, 556, 78, 457, 4])
console.log(third);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());