class Stack :
    def __init__(self):
        self.pushQ = []
        self.popQ = []
    def isEmpty(self):
        return len(self.pushQ) == 0 and len(self.popQ) == 0
    def Push(self,data):
        self.pushQ.append(data)
    def Pop(self):
        if self.isEmpty():
            raise Exception("Queues are empty...")
        if len(self.popQ)==0:
            while self.pushQ:
                self.popQ.append(self.pushQ.pop(0))
        pop = self.popQ.pop()
        q = self.popQ
        self.popQ = self.pushQ
        self.pushQ = q
        return pop

s = Stack()
s.Push(10)
s.Push(5)
s.Push(20)
print("Pop :",s.Pop())
s.Push(100)
print("Pop :",s.Pop())
print("Pop :",s.Pop())
print("Pop :",s.Pop())
s.Push(40)
s.Push(80)
print("Pop :",s.Pop())
print("Pop :",s.Pop())
