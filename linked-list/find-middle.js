// Define a simple Node structure
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to find the middle node in one pass
function findMiddle(head) {
    if (!head) return null;

    let slow = head; // Moves 1 step
    let fast = head; // Moves 2 steps

    while (fast && fast.next) {
        slow = slow.next;         // move one step
        fast = fast.next.next;    // move two steps
    }

    return slow.data; // Middle element
}
// Create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}
//test cases for linked list middle
const list1 = createLinkedList([1, 2, 3, 4, 5]);
console.log("Middle of [1, 2, 3, 4, 5]:", findMiddle(list1)); // Output: 3

const list2 = createLinkedList([10, 20, 30, 40]);
console.log("Middle of [10, 20, 30, 40]:", findMiddle(list2)); // Output: 30

const list3 = createLinkedList([1]);
console.log("Middle of [1]:", findMiddle(list3)); // Output: 1

const list4 = createLinkedList([]);
console.log("Middle of []:", findMiddle(list4)); // Output: null
