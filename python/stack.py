from functools import reduce

class TwoStack:
    def __init__(self,n):
        self.stack = [None]*n
        self.size = n
        self.top_1 = -1
        self.top_2 = self.size
         
    def Push1(self,value):
        if self.top_1<self.top_2 -1:
            self.top_1 += 1
            self.stack[self.top_1] = value
        else:
            print("Stack Overflow ") 
            exit(1) 

    def Push2(self,value):
        if self.top_1<self.top_2 -1:
            self.top_2 -= 1
            self.stack[self.top_2] = value
        else:
            print("Stack Overflow ") 
            exit(1) 

    def Pop1(self):
        if self.top_1 >= 0:
            value = self.stack[self.top_1] 
            self.stack[self.top_1]  = 0
            self.top_1 -= 1
            return value
        else:
            print("Stack Overflow ") 
            exit(1) 
            
    def Pop2(self):
        if self.top_2 <= self.size:
            value = self.stack[self.top_2] 
            self.stack[self.top_2] = 0
            self.top_1 += 1
            return value
        else:
            print("Stack Overflow ") 
            exit(1) 


# Driver program to test twoStacks class 
ts = TwoStack(5) 
ts.Push1(5) 
ts.Push2(10) 
ts.Push2(15) 
ts.Push1(11) 
ts.Push2(7) 
print(ts.stack)
print("Popped element from stack1 is " + str(ts.Pop1())) 
print(ts.stack)
ts.Push2(40) 
print(ts.stack)
print("Popped element from stack2 is " + str(ts.Pop2())) 
print(ts.stack)

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