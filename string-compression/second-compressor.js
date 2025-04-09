// Second Compressor to further reduce size
function optimizeCompression(encoded) {
    let result = '';
    let i = 0;

    // Loop through the encoded string
    while (i < encoded.length) {
        let char = encoded[i]; // Get current character
        let num = '';
        i++;

        // Get the number (could be more than 1 digit like '20')
        while (i < encoded.length && !isNaN(encoded[i])) {
            num += encoded[i];
            i++;
        }

        // If count is 1, no need to write '1' (e.g. 'b1' becomes 'b')
        if (num === '1') {
            result += char;
        } else {
            result += char + num;
        }
    }

    return result;
}
module.exports = { optimizeCompression };
