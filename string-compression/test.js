const { compressString } = require('./compressor');
const { optimizeCompression } = require('./second-compressor');
const { decompressString } = require('./decompressor');

const original = "aabcccccaaa";
const compressed = compressString(original);
const optimized = optimizeCompression(compressed);
const decompressed = decompressString(optimized);

console.log("Original:", original);
console.log("Compressed:", compressed);
console.log("Optimized:", optimized);
console.log("Decompressed:", decompressed);
