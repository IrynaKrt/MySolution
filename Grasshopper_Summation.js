//Solution 1
const summation = function (num) {
    let sum = 0
    for(let i = 1; i <= num; i++) { // i != 0 (!!!)
        sum += i
    }
    return sum
}

//Solution 2
const summation = function (num) {
return num ? num + summation(num - 1) : num;
}
