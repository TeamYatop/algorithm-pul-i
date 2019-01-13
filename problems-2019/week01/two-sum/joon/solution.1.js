/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function twoSum(nums, target) {
    for (let iSrc = 0; iSrc < nums.length - 1; iSrc += 1) {
        for (let iDst = 1; iDst < nums.length; iDst += 1) {
            const srcNumber = nums[iSrc];
            const dstNumber = nums[iDst];

            if (iSrc !== iDst && srcNumber + dstNumber === target) {
                return [iSrc, iDst];
            }
        }
    }
    return [];
}
