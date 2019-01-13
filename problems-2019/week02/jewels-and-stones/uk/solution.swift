class Solution {
    func numJewelsInStones(_ J: String, _ S: String) -> Int {
        var numJewels = 0
        J.forEach { jewel in
            S.forEach { stone in
                numJewels += (jewel == stone) ? 1 : 0
            }
        }
        return numJewels
    }
}
