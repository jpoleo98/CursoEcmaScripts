//flat
const array = [4,2,3,4,5,[8,7,6,[9,8,6,2]]];
console.log(array.flat(3));


//flatMap
const array2 = [1,2,3,4,8];
console.log(array2.flatMap(v => [v,v*2]));