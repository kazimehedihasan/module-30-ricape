function prog(a, b, c) {
  const result = a * b * c;
  return result;
}
const multipl = prog(12, 13, 14);
// console.log(multipl);


const add = `I am a wed developer.
I love to code.
I love to eat biryani`
// console.log(add);



const power = (bas, expon = 2) => {
    return Math.pow(bas, expon);
}
const all = power;

// console.log(all(6, 7));


// --------- 3
const problem = (friends) => {
  const newFriend  = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      newFriend .push(friend);
    }
  }
  return newFriend ;
};
const friends = ["John", "Jane", "Peter", "Mary"];
const newFriend = problem(friends);
console.log(newFriend ); // ["John", "Jane", "Mary"]
