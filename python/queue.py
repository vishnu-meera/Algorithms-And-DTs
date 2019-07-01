from functools import reduce

class Queue:

    def __init__(self):
        self.queueArray = [];
    
    #O(1)
    def Enqueue(self,data):
        self.queueArray.append(data);

    #O(1)
    def Dequeue(self):
        data = self.queueArray[0];
        del self.queueArray[0];
        return data;
    
    def sizeStack(self):
        return len(self.queueArray);


class Node(object):
    def __init__(self,data):
        self.data = data;
        self.nextNode = None;



class QueueLinkedList(object):
    def __init__(self):
        self.head = None;
        self.last = None;
        self.size = 0;

    def Enqueue(self, data):
        self.size = self.size+1;
        node = Node(data);
        if not self.head:
            self.head = node;
            self.last = self.head;
        else:
            self.last.nextNode = node
            self.last = self.last.nextNode;

    def Dequeue(self):
        if not self.head:
            return None;
        else:
            data = self.head.data;
            self.head = self.head.nextNode
            self.size = self.size - 1;
            return data;
    
    def StackSize(self):
        return self.size;
    