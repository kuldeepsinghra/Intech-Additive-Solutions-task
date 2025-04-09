function trapRainWater(height) {
    if (!height || height.length < 3) return 0;

    const n = height.length;
    const leftMax = new Array(n);
    const rightMax = new Array(n);
    let totalWater = 0;

    // Fill leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    // Fill rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    // Calculate total water
    for (let i = 0; i < n; i++) {
        const trapped = Math.min(leftMax[i], rightMax[i]) - height[i];
        if (trapped > 0) {
            totalWater += trapped;
        }
    }

    return totalWater;
}
//test cases
const input = [2, 1, 3, 0, 1, 2, 3];
const trappedWater = trapRainWater(input);
console.log(`Water trapped for [${input}] is:`, trappedWater); // 7


//Analog Function for Roof Shape  uncomment this code when you want
// Simulate y = sin(x) from 0 to 2π in steps
// function generateHeightsFromFunction(fn, start, end, steps) {
//     const stepSize = (end - start) / steps;
//     const heights = [];

//     for (let i = 0; i <= steps; i++) {
//         const x = start + i * stepSize;
//         heights.push(Math.round(Math.sin(x) * 10)); // Scaled for visibility
//     }

//     return heights;
// }

// // Example: simulate sin(x) from 0 to 2π
// const analogHeights = generateHeightsFromFunction(Math.sin, 0, 2 * Math.PI, 20);
// console.log("Simulated roof shape:", analogHeights);

// // Use same rain water function
// const analogWater = trapRainWater(analogHeights);
// console.log("Trapped water (analog function):", analogWater);
