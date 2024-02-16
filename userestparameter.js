function add(...args){
    return args.reduce(function(acc,cur){
        return acc + cur;
    })
}
console.log(add(5,4,2))