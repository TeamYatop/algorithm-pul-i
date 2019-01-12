/**
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function lengthOfLIS(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const cachedLengths = new Array(nums.length);
    cachedLengths[0] = 1;
    let maxLength = 1;

    for (let iCurrent = 1; iCurrent < nums.length; iCurrent += 1) {
        let previousMaxLength = 0;

        for (let iPrevious = 0; iPrevious < iCurrent; iPrevious += 1) {
            if (nums[iCurrent] > nums[iPrevious]) {
                previousMaxLength = Math.max(previousMaxLength, cachedLengths[iPrevious]);
            }
        }

        cachedLengths[iCurrent] = previousMaxLength + 1;
        maxLength = Math.max(maxLength, cachedLengths[iCurrent]);
    }

    return maxLength;
}
