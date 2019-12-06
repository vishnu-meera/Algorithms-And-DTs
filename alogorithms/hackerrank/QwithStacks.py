class Queue:
    def __init__(self):
        self.enQStack = []
        self.deQStack = []
    def isEmpty(self):
        return len(self.enQStack) == 0 and len(self.deQStack)==0
    def enqueue(self,data):
        self.enQStack.append(data)
    def dequeue(self):
        if self.isEmpty():
            raise Exception("Stacks are empty...")
        if len(self.deQStack) == 0:
            while self.enQStack : 
                self.deQStack.append(self.enQStack.pop())
        return self.deQStack.pop()
    def size(self):
        return len(self.enQStack) + len(self.deQStack)



q = Queue()
q.enqueue(10)
q.enqueue(5)
q.enqueue(20)
print("DeQ :",q.dequeue())
q.enqueue(100)
print("DeQ :",q.dequeue())
print("DeQ :",q.dequeue())
print("DeQ :",q.dequeue())
