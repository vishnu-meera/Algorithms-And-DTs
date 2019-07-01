class Node(object):
    def __init__(self,data):
        self.data = data;
        self.nextNode = None;


class LinkedList(object):
    def __init__(self):
        self.head = None;
        self.size = 0;
    #O(1)
    def size1(self):
        return self.size;
    
    #O(N)
    def size2(self):
        size=0;
        actualNode = self.head;
        while actualNode is not None:
            size+=1;
            actualNode = actualNode.nextNode;
        return size;

    #O(1)
    def insertStart(self, data):
        self.size = self.size+1;
        node = Node(data);
        if not self.head:
            self.head = node;
        else:
            node.nextNode = self.head;
            self.head = node;
    #O(N)
    def insertEnd(self, data):
        self.size = self.size+1;
        node = Node(data);
        actualNode = self.head;
        while actualNode.nextNode is not None:
            actualNode = actualNode.nextNode;
        actualNode.nextNode = node;
    
    #O(1)
    def removeStart(self):
        if self.head is None:
            return;

        if self.size == 1:
            self.head = None;
        else:
            self.head = self.head.nextNode;
        self.size = self.size-1;

    #O(N)
    def removeEnd(self):
        if self.head is None:
            return;

        if self.size == 1:
            self.head = None;
        else:
            actualNode = self.head;
            while actualNode.nextNode.nextNode is not None:
                actualNode = actualNode.nextNode;
            actualNode.nextNode = None;
        self.size = self.size-1;

    #O(N)
    def remove(self,data):
        if self.head is None:
            return;

        self.size = self.size-1;
        curNode = self.head;
        prvNode = None;
        while curNode.data != data:
            prevNode = curNode;
            curNode = curNode.nextNode;
        if prevNode is None:
            self.head = curNode.nextNode;
        else:
            prevNode.nextNode = curNode.nextNode;

    def traverse(self):
        actualNode = self.head;
        while actualNode is not None:
            print(actualNode.data);
            actualNode = actualNode.nextNode; 
            
        return None;
    def search(self,value):
        actualNode = self.head;
        while actualNode.nextNode is not None:
            if actualNode.data == value:
                return actualNode;
            actualNode = actualNode.nextNode;
        return None;



linklist = LinkedList();
linklist.insertStart(100);
linklist.insertStart(200);
linklist.insertEnd(300);
linklist.insertEnd(400);
linklist.insertStart(500);
linklist.traverse();
print("---------------------")
linklist.removeEnd();
linklist.removeStart();
linklist.traverse();
print("---------------------")
print(linklist.size1());
