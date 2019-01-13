/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// eslint-disable-next-line no-unused-vars
function addTwoNumbers(l1, l2) {
    const head = new ListNode(null);
    let list1 = l1;
    let list2 = l2;
    let prev = head;

    let currNum = 0;
    let carryNum = 0;
    while (list1 !== null || list2 !== null || carryNum > 0) {
        currNum = carryNum;

        if (list1 !== null) {
            currNum += list1.val;
            list1 = list1.next;
        }

        if (list2 !== null) {
            currNum += list2.val;
            list2 = list2.next;
        }

        if (currNum >= 10) {
            currNum %= 10;
            carryNum = 1;
        } else {
            carryNum = 0;
        }

        const curr = new ListNode(currNum);
        prev.next = curr;
        prev = curr;
    }

    return head.next;
}
