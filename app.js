function factorial(n){
    //garud clause
    if (n <= 0) {
        return "negative number or 0"
    }
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

factorial(6)