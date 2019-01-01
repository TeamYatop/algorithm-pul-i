/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    previousNumberPositions = new Map();

    for (let iCurrent = 0; iCurrent < nums.length; iCurrent++) {
        const currentNumber = nums[iCurrent];
        const otherNumber = target - nums[iCurrent];

        if (otherNumber in previousNumberPositions) {
            const iOther = previousNumberPositions[otherNumber];
            return [iOther, iCurrent];

        } else {
            previousNumberPositions[currentNumber] = iCurrent;

        }
    }
};
