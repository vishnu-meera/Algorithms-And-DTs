class MaxStack :
    def __init__(self):
        self.mainStack = []
        self.maxStack = []
        self.stackSize = 0
    def push(self,data):
        self.mainStack.append(data)
        self.stackSize += 1
        if len(self.mainStack) == 1:
            self.maxStack.append(data)
            return
        nextMax = self.maxStack[-1]
        if data > nextMax:
            self.maxStack.append(data)
        else:
            self.maxStack.append(nextMax)
        print(self.maxStack)
    def pop(self):
        if self.stackSize  > 0:
            self.maxStack.pop()
            self.stackSize -= 1
            return self.mainStack.pop()
    def popMax(self):
        if len(self.maxStack)  > 0:
            return self.maxStack.pop()    

stack = MaxStack()
stack.push(10)
stack.push(5)
stack.push(1)
stack.push(12)
stack.push(100)
print(stack.popMax())
print(stack.popMax())
print(stack.popMax())
print(stack.popMax())
print(stack.popMax())

