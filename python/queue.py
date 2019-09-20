from functools import reduce

class stack:
    def __inti__(self):
        self.stackAarray = []
    def Push(self,value):
        self.stackAarray.append(value)
    def Pop(self):
        data = self.stackAarray[-1]
        del self.stackAarray[-1]
        return data
    def Peek(self):
        return self.stackAarray[-1]
    def isEmpty(self):
        return True if len(self.stackAarray==0) else False   

class QbyStack:
    def __init__(self,n):
        self.stack = [None]*n
        self.size = n
        self.top_1 = -1
        self.top_2 = self.size
         
    def EnQ(self,value):
        if self.top_1<self.top_2 -1:
            self.top_1 += 1
            self.stack[self.top_1] = value
        else:
            print("Stack Overflow ") 
            exit(1) 
            
    def DeQ(self):
        if self.top_2 <= self.size:
            value = self.stack[self.top_2] 
            self.stack[self.top_2] = 0
            self.top_1 += 1
            return value
        else:
            print("Stack Overflow ") 
            exit(1)



class PriorityQueue:
    def __init__(self):
        self.q = []

    def EnQ(self,value):
        self.q.append(value)

    def DeQ(self):
        if len(self.q) !=  0:
            i = 0
            for _ in range(len(self.q)):
                if self.q[_][1] > self.q[i][1] :
                    i = _
            data =  self.q[i][0]
            del self.q[i]
            return data

    def HighestPriority(self):
        if len(self.q) !=  0:
            i = 0
            for _ in range(len(self.q)):
                if self.q[_][1] > self.q[i][1] :
                    i = _
            data =  self.q[i][0]
            return data
           
class Queue:

    def __init__(self):
        self.queueArray = []
    
    #O(1)
    def Enqueue(self,data):
        self.queueArray.append(data)

    #O(1)
    def Dequeue(self):
        data = self.queueArray[0]
        del self.queueArray[0]
        return data
    
    def sizeStack(self):
        return len(self.queueArray)
    
    def isEmpty(self):
        return True if len(self.queueArray==0) else False

    def reverse(self):
        i = 0
        j = len(self.queueArray)-1
        while True:
            self.queueArray[i],self.queueArray[j] =  self.queueArray[j],self.queueArray[i] 
            if (i>=j):
                break
            else:
                i += 1
                j -= 1
    def reverseUptoK(self,kthNumber):
        i = 0
        j = kthNumber
        while True:
            self.queueArray[i],self.queueArray[j] =  self.queueArray[j],self.queueArray[i] 
            if (i>=j):
                break
            else:
                i += 1
                j -= 1



class Node(object):
    def __init__(self,data):
        self.data = data
        self.nextNode = None



class QueueLinkedList(object):
    def __init__(self):
        self.head = None
        self.last = None
        self.size = 0

    def Enqueue(self, data):
        self.size = self.size+1
        node = Node(data)
        if not self.head:
            self.head = node
            self.last = self.head
        else:
            self.last.nextNode = node
            self.last = self.last.nextNode

    def Dequeue(self):
        if not self.head:
            return None
        else:
            data = self.head.data
            self.head = self.head.nextNode
            self.size = self.size - 1
            return data
    
    def StackSize(self):
        return self.size
    
q = Queue()
q.Enqueue(1)
q.Enqueue(2)
q.Enqueue(3)
q.Enqueue(4)
q.Enqueue(5)
q.Enqueue(6)
q.Enqueue(7)
print(q.queueArray)
q.reverseUptoK(3)
print(q.queueArray)
q.Dequeue()
q.Dequeue()
print(q.queueArray)


# q = PriorityQueue()
# q.EnQ([1,9])
# q.EnQ([0,8])
# q.EnQ([3,3])
# q.EnQ([4,7])
# q.EnQ([5,1])
# q.EnQ([6,2])
# print(q.q)
# q.DeQ()
# q.DeQ()
# print(q.q)
# print(q.HighestPriority())

