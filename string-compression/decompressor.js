// Decompressor – To expand the compressed string back to original
function decompressString(compressed) {
    let result = '';
    let i = 0;

    // Loop through the compressed string
    while (i < compressed.length) {
        let char = compressed[i]; // Character
        let num = '';
        i++;

        // Collect digits (may be multiple like '20')
        while (i < compressed.length && !isNaN(compressed[i])) {
            num += compressed[i];
            i++;
        }

        // If no number, repeat only once
        result += char.repeat(num ? parseInt(num) : 1);
    }

    return result;
}
module.exports = { decompressString };

