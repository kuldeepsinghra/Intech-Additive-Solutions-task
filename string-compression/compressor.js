// Run-Length Encoding Compressor
function compressString(str) {
    if (!str) return '';

    let result = ''; // Store the final compressed string
    let count = 1;   // Count of repeating characters

    // Loop through the string
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++; // If same as previous, increment count
        } else {
            // Append previous char and count
            result += str[i - 1] + count;
            count = 1; // Reset count for new char
        }
    }

    // Append the last character group
    result += str[str.length - 1] + count;
    return result;
}
module.exports = { compressString };
