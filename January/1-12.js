// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


var middleNode = function(head) {
    var point1 = head;
    var point2 = head;
    //point2 will always be ahead
    while(point2 != null && point2.next != null){
        point1 = point1.next;
        point2 = point2.next.next;
    }

    return point1;
};

// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously
//following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is
//connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

//  

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

var detectCycle = function(head) {
    let slow = head
    let fast = head;
    // looping while fast and fast.next are not = to null
    while (fast !== null && fast.next !== null) {
        //moving the slow pointer one at a time
        //moving the fast pointer two at a time
        slow = slow.next;
        fast = fast.next.next;
        //once the cycle is found, break
        if (slow == fast) {
            break;
        }
    }
    //if there isn't a cycle, return null
    if (fast == null || fast.next == null) {
        return null;
    }
    // run loop until head & slow don't collab
    //move the head and slow by one
    while (head !== slow) {
        head = head.next;
        slow = slow.next;
    }

    return head;
};
