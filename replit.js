function sumOfDigits(n) {
    const digitalString = n.toString()
    //console.log(digitalString);
    let returnString = Number(digitalString[0]);
    for (let i = 1; i < digitalString.length; i++) {
        returnString += Number(digitalString[i]);
    }
    return returnString;
}

//console.log(sumOfDigits(233));

function sumOfDigits2(n) {
    let work = n;
    let sum = 0;
    while (work > 0) {
        sum += work % 10;
        //console.log(work % 10);
        //console.log(sum);
        work = Math.floor(work / 10);
        //console.log(Math.floor(work / 10));
    }
    return sum;
}

//console.log(sumOfDigits2(233));

function sumOfDigits3(n) {
    if (!Math.floor(n / 10)) return n;
    return n % 10 + sumOfDigits3(Math.floor(n / 10))
}

console.log(sumOfDigits3(233));