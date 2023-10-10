const arr = [1, 2, 3, 4, 5];

const calculateSum = arr.reduceRight((a, b) => a + b);

console.log(calculateSum);
