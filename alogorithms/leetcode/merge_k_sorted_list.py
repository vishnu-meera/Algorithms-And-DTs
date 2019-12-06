class MinHeap:
    def __init__(self,size):
        self.heapArr = [None] * size
        self.length = 0
        self.capacity = size
    def put(self,node):
        if self.length == self.capacity:
            return
        self.heapArr[self.length] = node
        self.length += 1
        self.fixUp(self.length-1)
    def fixUp(self,index):
        parent = (index-1)//2
        if parent >= 0 and self.heapArr[index][0] <= self.heapArr[parent][0]:
            self.heapArr[parent],self.heapArr[index] = self.heapArr[index],self.heapArr[parent]
            self.fixUp(parent)
    def get(self):
        if self.length > 0:
            node = self.heapArr[0]
            l = self.length-1
            self.heapArr[0],self.heapArr[l] = self.heapArr[l],self.heapArr[0]
            self.length = l
            self.fixDown(0)
            return node
        else:
            return None

    def fixDown(self,index):
        left = (2*index) + 1
        right = (2*index) + 2
        largest = index
        if left < self.length and self.heapArr[left][0] <= self.heapArr[index][0]:
            largest = left
        if right < self.length and self.heapArr[right][0] <= self.heapArr[largest][0]:
            largest = right
        if largest != index:
            self.heapArr[largest],self.heapArr[index] = self.heapArr[index],self.heapArr[largest]
            self.fixDown(largest) 

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        length = len(lists)
        if length == 0:
            return
        h = MinHeap(length)
        head = point = ListNode(0)
        for listnode in lists:
            if listnode:
                h.put((listnode.val,listnode))
        while True:
            tup = h.get()
            if tup is None:
                break
            point.next = ListNode(tup[0])
            point = point.next
            node = tup[1].next
            if node:
                h.put((node.val,node))
        return head.next