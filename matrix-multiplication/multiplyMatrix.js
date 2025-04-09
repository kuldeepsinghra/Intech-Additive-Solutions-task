function multiplyMatrices(A, B) {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

//test cases
const A = [
    [1, 2],
    [3, 4]
];

const B = [
    [5, 6],
    [7, 8]
];

const result = multiplyMatrices(A, B);
console.log("Matrix A x B:");
console.log(result);
