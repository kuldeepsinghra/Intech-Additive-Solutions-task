//first check prime number
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}
//now write a function to find largestfivedigitprime in pi
function largestFiveDigitPrimeInPi(piDigits) {
    let maxPrime = -1;

    for (let i = 0; i <= piDigits.length - 5; i++) {
        const slice = piDigits.substr(i, 5);
        const num = parseInt(slice);

        if (isPrime(num)) {
            if (num > maxPrime) {
                maxPrime = num;
            }
        }
    }

    return maxPrime;
}
//test cases
const pi100 = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

console.log("Largest 5-digit prime in Pi(100):", largestFiveDigitPrimeInPi(pi100)); 
