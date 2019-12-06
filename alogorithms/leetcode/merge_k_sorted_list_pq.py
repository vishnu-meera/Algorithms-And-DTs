from Queue import PriorityQueue

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        head = point = ListNode(0)
        q = PriorityQueue()
        for l in lists:
            if l:
                q.put((l.val, l))
        while not q.empty():
            val, node = q.get()
            point.next = ListNode(val)
            point = point.next
            node = node.next
            if node:
                q.put((node.val, node))
        return head.next





from Queue import PriorityQueue
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        length = len(lists)
        if length == 0:
            return
        h = PriorityQueue()
        head = point = ListNode(0)
        for listnode in lists:
            if listnode:
                h.put(listnode.val,listnode)
        while q.Empty():
            val,node = h.get()
            point.next = ListNode(val)
            point = point.next
            node=node.next
            if node:
                h.put(node)
        return head.next