/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function twoSum(nums, target) {
    const previousNumberPositions = new Map();

    for (let iCurrent = 0; iCurrent < nums.length; iCurrent += 1) {
        const currentNumber = nums[iCurrent];
        const otherNumber = target - nums[iCurrent];

        if (otherNumber in previousNumberPositions) {
            const iOther = previousNumberPositions[otherNumber];
            return [iOther, iCurrent];
        }
        previousNumberPositions[currentNumber] = iCurrent;
    }
    return [];
}
