// function factorial(n){
//     //garud clause
//     if (n <= 0) {
//         return "negative number or 0"
//     }
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }

// factorial(6)


// let yesterday = []
// let today = []

// function occupiedParking(spaces, yesterday, today){
//     let count = 0;
//     for(let i = 0; i <spaces; i++) {
//         if (yesterday[i] === "C" && today[i] === "c"){
//             count++;
//         }
//     }
//     return count;
// }


// console.log(occupiedParking(5, "" , ""));


function binaryToDecimal(binary){
    decimal = 0 
    const n = binary.length;

    for (let i = 0; i < n; i++) {

        const digit = int(n - i- 1);

        decimal += digit * Math.pow(2);
    }
     console.log(decimal);
}


binaryToDecimal(111111111)