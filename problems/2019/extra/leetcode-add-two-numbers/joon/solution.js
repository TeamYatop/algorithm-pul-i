/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    head = new ListNode(null);
    prev = head;
    
    currNum = 0;
    carryNum = 0;
    while (l1 !== null || l2 !== null || carryNum > 0) {
        currNum = carryNum;
        
        if (l1 !== null) {
            currNum += l1.val;
            l1 = l1.next;
        }
        
        if (l2 !== null) {
            currNum += l2.val;
            l2 = l2.next;
        }
        
        if (currNum >= 10) {
            currNum = currNum % 10;
            carryNum = 1;
        } else {
            carryNum = 0;
        }
        
        curr = new ListNode(currNum);
        prev.next = curr;
        prev = curr;
    }

    return head.next;
};