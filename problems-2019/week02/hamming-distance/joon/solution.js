/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function hammingDistance(x, y) {
    const exclusiveOrNumber = x ^ y; // eslint-disable-line no-bitwise
    const exclusiveOrBinaryString = exclusiveOrNumber.toString(2);
    const allOnesInBinaryString = exclusiveOrBinaryString.match(/1/g) || [];
    return allOnesInBinaryString.length;
}
