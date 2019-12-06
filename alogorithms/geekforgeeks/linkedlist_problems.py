class Node:
    def __init__(self,data):
        self.data = data
        self.Next = None
class Heap:
    def __init__(self,c):
        self.arr =  [None] * c
        self.h = 0
        self.c = c
    def push(self,node):
        if self.h == self.c:
            return 
        self.arr[self.h] = node
        self.h = self.h + 1
        self.fixUp(self.h-1)
    def fixUp(self,i):
        p = (i-1)//2
        if p >= 0 and self.arr[i].data <= self.arr[p].data:
            self.arr[p],self.arr[i] = self.arr[i],self.arr[p]
            self.fixUp(p)
    def pop(self):
        if self.h > 0:
            node  = self.arr[0]
            h1 = self.h-1
            self.arr[0],self.arr[h1] = self.arr[h1],self.arr[0] 
            self.h = h1
            self.fixDown(0)
            return node
        else:
            return None
    def fixDown(self,i):
        l = (2*i) + 1
        r = (2*i) + 2
        large = i
        if l < self.h and self.arr[l].data <= self.arr[i].data:
            large = l
        if r < self.h and self.arr[r].data <= self.arr[large].data:
            large = r
        if large !=i:
            self.arr[i],self.arr[large] = self.arr[large],self.arr[i] 
            self.fixDown(large)
class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0
    def getSzie(self):
        return self.size
    def insert(self,data):
        node = Node(data)
        if not self.head:
            self.head = node
        else:
            node.Next = self.head
            self.head = node
        self.size += 1
    def remove(self):
        if self.head is None:
            return

        if self.size == 1:
            data = self.head.data
            self.head = None
            self.size = self.size-1
            return data
        else:
            actualNode = self.head
            while actualNode.Next.Next is not None:
                actualNode = actualNode.Next
            data = actualNode.Next.data
            actualNode.Next = None
            self.size = self.size-1
            return data

    def traverse(self):
        cur = self.head
        while cur:
            print(cur.data)
            cur = cur.Next

    def reverse(self):
        if self.head is None:
            return
        curNode = self.head
        preNode = None
        nextNode = None
        while curNode is not None:
            nextNode = curNode.Next
            curNode.Next = preNode
            preNode = curNode
            curNode = nextNode
        self.head = preNode

    def middle(self):
        if self.head is None:
            return
        if self.size ==1 or self.size ==2:
            return self.head.data
        curNode = self.head
        nextNode = self.head.Next
        while nextNode is not None:
            curNode = curNode.Next
            nextNode = nextNode.Next.Next
        return curNode.data

    def insertAfterSort(self,data):
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            cuNode = self.head
            while cuNode.Next:
                if cuNode.data < node.data:
                    if node.data < cuNode.Next.data:
                        break
                cuNode = cuNode.Next
            temp = cuNode.Next
            cuNode.Next = node
            node.Next = temp
        self.size += 1

def intersection(head1,head2):
    m =dict()
    while head1 is not None:
        if head1.data not in m:
            m[head1.data] = 1
        else:
             m[head.data] += 1
        head1 = head1.Next
    print(m)
    while head2 is not None:
        if head2.data in m:
            return head2.data
        head2 = head2.Next
    return None

def insertSection2(link1,link2):
    s1 = link1.getSzie()
    s2 = link2.getSzie()
    cu1 = link1.head
    cu2 = link2.head
    if s1 != s2:
        if s1 > s2:
            k = s1 - s2
            while k > 0:
                cu1 = cu1.Next
                k=-1
        else:
            k = s2 - s1
            while k > 0:
                cu2 = cu2.Next
                k=-1
    while cu1 is not None and cu2 is not None:
        if cu1.data == cu2.data:
            return cu1.data
        cu1 = cu1.Next
        cu2 = cu2.Next
    return None

def mergeLinkedList(link1,link2):
    c1 = link1.head
    c2 = link2.head
    if c1 is None and c2 is None:
        return None
    else:
        merged = LinkedList()
        while c1 is not None and c2 is not None:
            if c1.data < c2.data:
                merged.insert(c1.data)
                c1 =c1.Next
            else:
                merged.insert(c2.data)
                c2 =c2.Next
        if c1 is None:
            while c2 is not None:
                merged.insert(c2.data)
                c2 =c2.Next               
        elif c2 is None:
            while c1 is not None:
                merged.insert(c1.data)
                c1 =c2.Next 
        return merged

def mergeLinkedListWithOutDuplicates(link1,link2):
    c1 = link1.head
    c2 = link2.head
    if c1 is None and c2 is None:
        return None
    else:
        merged = LinkedList()
        m = dict()
        while c1 is not None and c2 is not None:
            if c1.data < c2.data:
                if c1.data not in m:
                    merged.insert(c1.data)
                    m[c1.data] = 1
                c1 =c1.Next
            else:
                if c2.data not in m:
                    merged.insert(c2.data)
                    m[c2.data] = 1
                c2 =c2.Next
        if c1 is None:
            while c2 is not None:
                merged.insert(c2.data)
                c2 =c2.Next               
        elif c2 is None:
            while c1 is not None:
                merged.insert(c1.data)
                c1 =c2.Next 
        return merged

def intersectionOfLinkedList(link1,link2):
    c1 = link1.head
    c2 = link2.head
    if c1 is None and c2 is None:
        return None
    else:
        merged = LinkedList()
        m = dict()
        while c1 is not None and c2 is not None:
            if c1.data < c2.data:
                if c1.data not in m:
                    merged.insert(c1.data)
                    m[c1.data] = 1
                c1 =c1.Next
            else:
                if c2.data not in m:
                    merged.insert(c2.data)
                    m[c2.data] = 1
                c2 =c2.Next
        if c1 is None:
            while c2 is not None:
                merged.insert(c2.data)
                c2 =c2.Next               
        elif c2 is None:
            while c1 is not None:
                merged.insert(c1.data)
                c1 =c2.Next 
        return merged

def mergeKsortedList(linkHeadArray):
    h = Heap(len(linkHeadArray))
    mergedList = LinkedList()
    for link in linkHeadArray:
        if link.head:
            h.push(link.head)

    while True:
        n = h.pop()
        if not n:
            break
        print(n.data)
        if n.Next:
            h.push(n.Next)
    return mergedList

link1 = LinkedList()
link1.insert(11)
link1.insert(7)
link1.insert(5)
link1.insert(3)
link1.insert(1)
link2 = LinkedList()
link2.insert(14)
link2.insert(12)
link2.insert(8)
link2.insert(6)
link2.insert(2)
link3 = LinkedList()
link3.insert(13)
link3.insert(10)
link3.insert(9)
link3.insert(4)
link3.insert(0)
link4 = LinkedList()
link4.insert(19)
link4.insert(18)
link4.insert(17)
link4.insert(16)
link4.insert(15)
link5 = LinkedList()
link5.insert(1)
link5.insert(2)
link5.insert(3)
link5.insert(4)
link5.insert(5)
merged = mergeKsortedList([link1,link2,link3,link4,link5])
merged.traverse()
# print("Pop : ", linklist.remove())
# print("Pop : ", linklist.remove())
# print("Pop : ", linklist.remove())
# print("Pop : ", linklist.remove())
# print("Pop : ", linklist.remove())
# linklist.insert(100)
# linklist.insert(200)
# linklist.insert(300)
# linklist.insert(400)
# linklist.insert(500)
# linklist.traverse()
# print("*****")
# linklist.traverse()
# linklist.insertAfterSort(4)
# print("*****")
# linklist.traverse()
# linklist.insertAfterSort(7)
# print("*****")
# linklist.traverse()
# print("*****")
# print(linklist.middle())
# print("*****")
# linklist2 = LinkedList()
# linklist2.insert(8)
# linklist2.insert(7)
# linklist2.insert(6)
# linklist2.insert(5)
# linklist2.insert(4)
# linklist2.insert(3)
# merged = mergeLinkedList(linklist,linklist2)
# merged.traverse()
# print(intersection(linklist.head,linklist2.head))