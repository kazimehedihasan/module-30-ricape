const actor = {
  name: "ananata",
  age: 30,
  phone: "01733939665",
  money: 5750,
};
const phone = actor.name;
console.log(phone);


// Array destructuring

const numbers = [45, 99]
const [first, secound] = numbers;
const [x, y] = [12, 66]



// advanced

function doubleThem(a, b){
    return [a*2, b*2];
}
const[prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);