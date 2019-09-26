# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
        
    def insert(self,data):
        node = Node(data)
        if self.head is None:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head = node
        self.size += 1
    
    def size1(self):
        return self.size
        
def solution(A):
    # write your code in Python 3.6
    if len(A) == 0:
        return 0
    if len(A) == 1:
        return 1
    
    llist = LinkedList()
    for i in range(len(A)):
        if A[i] == -1:
            k = A[-1]
            llist.insert(A[-1])
            llist.insert(A[k])
            break
        else:
            llist.insert(A[i])
            
    return llist.size1()
            
            
            
            
            
            
            
            
