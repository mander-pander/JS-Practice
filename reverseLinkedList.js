//Given the head of a singly linked list, reverse the list, and return the reversed list.
//Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

//destructured assignment allows values to get saved sequentially with ES6 script

var reverseList = function (head) {
    let [prev, current] = [null, head];
    while (current) {
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
};
