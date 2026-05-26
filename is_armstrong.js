// find if given 3 digit number is armstrong

let num = 153
let copy = num
let count = 3
let last_digit = 0
let sum = 0

// implement

last_digit = num%10           // 3
num = parseInt(num / 10)      // 12 
sum = sum + last_digit * last_digit * last_digit

last_digit = num%10           // 2
num = parseInt(num / 10)      // 1 
sum = sum + last_digit * last_digit * last_digit


last_digit = num%10           // 1
num = parseInt(num / 10)      // 0
sum = sum + last_digit * last_digit * last_digit


console.log(sum)




if(sum == copy){
    console.log(sum+" is armstrong")
} else{
    console.log(sum+" is not armstrong")
}