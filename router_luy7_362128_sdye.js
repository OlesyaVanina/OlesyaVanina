let array = getRandomArray(); array.forEach(item => console.log(item));
true - 21,10,95,11,34,18,56,96,6,66,86,52,64,8,45,57,71,59,98,21,91,84,31,46,65,39,90,23,93,68,73,93,26,45,61,25,71,3,31,78,62,31,29,8,63,39,2,87,79
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findLargestNumber = numbers => Math.max(...numbers);

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
