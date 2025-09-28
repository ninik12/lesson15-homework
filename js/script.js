
function getSamNumbers(...numbers) {
    let sum = 0;
    for (let item of numbers){
        sum = sum + item
    }
    return sum
}
let resultSum = getSamNumbers(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultSum);


// N2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    isloggedin: true 
}

function fullName(obj){
    let info = obj.firstname + ' ' + obj.lastname
    if (obj.isloggedin){
        return info
    } return false
}
let resultFullName = fullName(user);
console.log(resultFullName);



//
function newFnc(number){
    return Math.max(...number)
}
let result1 = newFnc([6, 89, 35, 26, 5, 123, 44])
console.log(result1);


//
function evenOddNumber(num){
    if (num % 2 === 0){
        return "this number is even"
    } return "this number is odd"
}
let resultEvenOdd = evenOddNumber(10)
console.log(resultEvenOdd);