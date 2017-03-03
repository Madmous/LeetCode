/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let valByIndex = {};
    let i = 0;
    
    while(l1 && l1.val !== null) {
        valByIndex[i] = l1.val;
        
        l1 = l1.next;
        i++;
    }
    
    let addOneToNextValue = false;
    i = 0;
    
    while(l2 && l2.val !== null) {
        if (valByIndex.hasOwnProperty(i)) {
            valByIndex[i] += l2.val;
        } else {
            valByIndex[i] = l2.val;
        }
        
        if (addOneToNextValue) {
            valByIndex[i]++;
            
            addOneToNextValue = false;
        }
        
        if (Math.floor(valByIndex[i] / 10) === 1) {
            addOneToNextValue = true;
            
            valByIndex[i] -= 10;
        }
        
        l2 = l2.next;
        i++;
    }
    
    while (i <= Object.keys(valByIndex).length && addOneToNextValue) {
        if (valByIndex.hasOwnProperty(i)) {
            valByIndex[i]++;
        } else {
            valByIndex[i] = 1;
        }
        
        if (Math.floor(valByIndex[i] / 10) === 1) {
            addOneToNextValue = true;
            valByIndex[i] -= 10;
        } else {
            addOneToNextValue = false;
        }
        
        i++;
    }
    
    let listNodeTail = null;
    let l3 = null;
    
    for (let key in valByIndex) {
        if (!l3) {
            l3 = new ListNode(valByIndex[key]);
            listNodeTail = l3;
        } else {
            listNodeTail.next =  new ListNode(valByIndex[key]);
            listNodeTail = listNodeTail.next;
        }
    }
    
    return l3;
};