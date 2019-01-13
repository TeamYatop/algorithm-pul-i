/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var num1: [Int] = []
        var num2: [Int] = []
        
        var node = l1
        while node != nil {
            num1.append(node!.val)
            node = node?.next
        }
        
        node = l2
        while node != nil {
            num2.append(node!.val)
            node = node?.next
        }
        
        var result: ListNode?
        var currentNode: ListNode?
        
        var numCount = max(num1.count, num2.count)
        var ten = 0
        for i in 0..<numCount {
            var sum = 0
            if i < num1.count { sum += num1[i] }
            if i < num2.count { sum += num2[i] }
            sum += ten
            if sum >= 10 { 
                ten = 1
                sum -= 10
            } else {
                ten = 0
            }
            
            
            if result == nil {
                result = ListNode(sum)
                currentNode = result
            } else {
                currentNode?.next = ListNode(sum)
                currentNode = currentNode?.next
            }
        }
        
        if ten == 1 {
            currentNode?.next = ListNode(1)
        }
        
        return result
    }
}
