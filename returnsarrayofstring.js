function namelength(str){
    const words = str.split('');
    return words.map(str => `${words} ${words.length}`);
}
console.log(namelength("vaibhav gupta"));