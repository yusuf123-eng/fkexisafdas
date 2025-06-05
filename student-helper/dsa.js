const numbers = [5, 3, 8, 1, 2];


const yusuf = 3;
let foundIndex = -1;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === yusuf) {
    foundIndex = i;
    break;
  }
}
console.log(foundIndex !== -1 
  ? `Found ${yusuf} at index ${foundIndex}` 
  : `${yusuf} not found`);


numbers.sort((a, b) => a - b);
console.log('Sorted array:', numbers);
