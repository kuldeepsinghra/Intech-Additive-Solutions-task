function countConsecutiveSumWays(n) {
    let count = 0;

    // Try all possible values of k (number of terms in the sequence)
    for (let k = 1; k * (k - 1) / 2 < n; k++) {
        const numerator = n - (k * (k - 1)) / 2;

        // If x is an integer, we found a valid sequence
        if (numerator % k === 0) {
            count++;
        }
    }

    return count;
}

//test cases
console.log("Ways to write 15:", countConsecutiveSumWays(15)); // Output: 4
console.log("Ways to write 10:", countConsecutiveSumWays(10)); // Output: 2 (1+2+3+4, 4+6)
console.log("Ways to write 9:", countConsecutiveSumWays(9));   // Output: 3 (2+3+4, 4+5, 9)
