/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function numJewelsInStones(J, S) {
    const jewels = J.split("");

    let jewleCount = 0;
    jewels.forEach(jewel => {
        const regex = new RegExp(jewel, "g");
        jewleCount += (S.match(regex) || []).length;
    });

    return jewleCount;
}
