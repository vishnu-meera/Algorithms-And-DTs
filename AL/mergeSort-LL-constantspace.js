// /**
//      * Definition for singly-linked list.
//      * class ListNode {
//      *     int val;
//      *     ListNode next;
//      *     ListNode(int x) {
//      *         val = x;
//      *         next = null;
//      *     }
//      * }
//      */
//     class Solution {
//         ListNode move(ListNode head, int moveBy) {
//             while(head!=null && moveBy-- > 0)
//                 head=head.next;
//             return head;
//         }
//         ListNode merge(ListNode loop, int length) {
//             if (loop==null || loop.next==null)
//                 //this will help break the for loop in the sortList
//                 return null;
//             ListNode start1 = loop.next;
//             ListNode end1   = move(start1, length/2-1);
//             if (end1 == null)
//                return null;
//             ListNode start2 = end1.next;
//             end1.next = null;
//             ListNode end2 = move(start2, length/2-1);
//             ListNode end2next = (end2!=null)? end2.next: null;
//             if (end2next!=null)
//                 end2.next = null;
//             while (start1!=null || start2!=null) {
//                 if (start2==null || (start1!=null && start1.val < start2.val)) {
//                     loop.next = start1;
//                     start1=start1.next;
//                     loop=loop.next;
//                 } else {
//                     loop.next = start2;
//                     start2=start2.next;
//                     loop=loop.next;
//                 }
//             }
//             loop.next=end2next;
//             return loop;
//         }
//         ListNode sortList(ListNode head) {
//             ListNode dummy = new ListNode(0);
//             dummy.next = head;
//             for (int k=2; true; k*=2) {
//                 int nMerges = 0;
//                 ListNode loop = dummy;
//                 while(loop!=null && loop.next!=null) {
//                     loop = merge(loop, k);
//                     nMerges++;
//                 }
//                 //only one sorted run?
//                 if (nMerges<=1)
//                     break;
//             }
//             return dummy.next;
//         }
//     }
