Each folder in this repository represents a different task/problem. 
For every task, I have created a separate JavaScript file and added a script in package.json to run that specific file along with its test cases. 
Running the script through the terminal will provide appropriate input and output information, demonstrating the working of each solution.
You can simply download my code from the GitHub repository link or clone the repository using the provided URL. After that, you can run the specific command for each problem using the scripts I’ve written. I’ve also explained the approach I followed while solving each problem to make the logic easy to understand.
git clone https://github.com/username/repo-name.git
cd repo-name
npm install

1..../*To run all test cases together:*/
npm run test
This will execute and validate the logic for:

compressor.js (First Compression)

second-compressor.js (Second-Level Compression)

decompressor.js (Decompression)

Approach:
First Compression (compressor.js)

Implemented using Run Length Encoding (RLE).

For each group of consecutive characters, we store the character and its count.

Example: aabcccccaaa → a2b1c5a3.

Second Compression (second-compressor.js)

Optimizes the first compression output by removing counts of 1 (e.g., b1 → b).

Example: a2b1c5a3 → abc5a3.



2....**Find Middle Element in Linked List
**Run Command:
npm run linkedlist
File: linked-list/find-middle.js

Approach:

Used slow and fast pointer technique to find middle in one pass.

Fast moves two steps, slow moves one. When fast reaches end, slow is at middle.

Efficient O(n) time and O(1) space.

Decompression (decompressor.js)

Reverses the compressed string (from second compression).

Uses regular expressions to extract characters and counts (defaults count to 1 if missing).

Example: abc5a3 → aabcccccaaa.

All edge cases are handled, including large counts like a20b20c1a4



3....**Trapping Rainwater
**Run Command:

npm run rainwatertrap
File: rainwater-trap/trap-water.js

Approach:

Used two-pointer approach with precomputed max-left and max-right arrays.

Water trapped at each index: min(leftMax, rightMax) - height[i] if positive.

Linear time and space solution.




4....**Sum of Consecutive Natural Numbers
**Run Command:
npm run consecutivesum
File: consecutive-sum/consecutiveSum.js

Approach:

Mathematical formula used to express n = k*(2a + k - 1)/2.

Count all possible values of k for which this expression holds with integer a.

Optimized loop based solution.




5....Largest 5-Digit Prime in First 100 Digits of Pi
Run Command:

npm run primeinpi
File: prime-in-pi/primeInPi.js

Approach:

Took first 100 digits of Pi as string.

Slid a 5-digit window over the string, checked for primality using basic trial division.

Tracked and returned the largest valid prime found.




6....**Rectangle Intersection
**Run Command:
npm run rectangleintersect
File: rectangle-intersect/checkIntersection.js

Approach:

Checked if two rectangles intersect using projection overlap logic on X and Y axes.

If one rectangle is completely to left/right or above/below, then no intersection.

Otherwise, they intersect.



** Favorite Subject – Problem Solving
**File: favorite-subject/problem-solving-notes.md

Approach:

Shared thought process and real examples on how I approach solving problems.

Explained importance of breaking problems, using data structures and logic.

Showcased interest in DSA and logical thinking.




7....** Matrix Multiplication
**Run Command:
npm run matrixmultiplication
File: matrix-multiplication/multiplyMatrix.js

Approach:

Standard triple nested loop to perform matrix multiplication:
result[i][j] += A[i][k] * B[k][j].

Ensured proper dimensions before processing.

O(n³) time complexity — suitable for small matrices.





