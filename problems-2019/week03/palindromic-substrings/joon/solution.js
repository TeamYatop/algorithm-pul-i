/**
 * @param {string} s
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function countSubstrings(s) {
    return countPalindromeSubstrings(s);
}


function createGridWithInitValue(rowSize, colSize, initValue = 0) {
    grid = new Array(rowSize);
    for (let iRow = 0; iRow < rowSize; iRow++) {
        grid[iRow] = new Array(colSize).fill(initValue);
    }
    return grid;
}

function countPalindromeSubstrings(s) {
    if (s.length == 0) {
        return 0;
    }

    let isPalindromeCache = createGridWithInitValue(s.length, s.length, false);
    let palindromeSubstringCounter = 0;
    let maxPalindromeBeginIndex = 0;
    let maxPalindromeLength = 1;

    palindromeSubstringCounter += s.length;
    for (let i = 0; i < s.length; i++) {
        isPalindromeCache[i][i] = true;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            isPalindromeCache[i][i + 1] = true;
            palindromeSubstringCounter += 1;
        }
    }

    for (let currentLength = 3; currentLength <= s.length; currentLength++) {
        for (let iBegin = 0; iBegin < s.length - currentLength + 1; iBegin++) {
            const iEnd = iBegin + currentLength - 1;
            if (isPalindromeCache[iBegin + 1][iEnd - 1] && s[iBegin] == s[iEnd]) {
                isPalindromeCache[iBegin][iEnd] = true;
                palindromeSubstringCounter += 1;
            }
        }
    }

    return palindromeSubstringCounter;
}
