from functools import reduce

class Stack:

    def __init__(self):
        self.stackArray = []
    
    #O(1)
    def Push(self,data):
        self.stackArray.append(data)

    #O(1)
    def Pop(self):
        data = self.stackArray[-1]
        del self.stackArray[-1]
        return data
    
    #O(1)
    def Peek(self):
        return self.stackArray[-1]
    
    def sizeStack(self):
        return len(self.stackArray)


def functionFactorial(number):
    if number == 0 or number == 1:
        return 1
    else:
         return number * functionFactorial(number-1)

#print(functionFactorial(1000))

def factorial(n):return reduce(lambda x,y: x*y,range(1,n+1))

#print(factorial(100000))


class Node(object):
    def __init__(self,data):
        self.data = data
        self.nextNode = None



class StackLinkedList(object):
    def __init__(self):
        self.head = None
        self.size = 0

    def Push(self, data):
        self.size = self.size+1
        node = Node(data)
        if not self.head:
            self.head = node
        else:
            node.nextNode = self.head
            self.head = node

    def Pop(self):
        if not self.head:
            return None
        else:
            data = self.head.data
            self.head = self.head.nextNode
            self.size = self.size - 1
            return data
    
    def StackSize(self):
        return self.size
    
    def Peek(self):
        if not self.head:
            return None
        else:
            return self.head.data