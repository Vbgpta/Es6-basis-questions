const numbers = [1,2,3,2,4,1];
const uniqueNumbers = numbers.filter(function(value,index,Array){
return Array.indexOf(value) === index;
});
console.log(uniqueNumbers)

