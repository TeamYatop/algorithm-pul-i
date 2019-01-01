/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let iSrc = 0; iSrc < nums.length - 1; iSrc++) {
        for (let iDst = 1; iDst < nums.length; iDst++) {
            const srcNumber = nums[iSrc];
            const dstNumber = nums[iDst];

            if (iSrc != iDst && srcNumber + dstNumber == target) {
                return [iSrc, iDst];
            }
        }
    }
};