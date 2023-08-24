const numbers = [1, 2, 3, 4]

for (const num of numbers) {
    console.log(num);
}

const glass = {name: 'glass',
 color: 'golden',
  price: 12, 
  isCleaned: true
};

for  (const keys in glass){
    console.log(keys);
}