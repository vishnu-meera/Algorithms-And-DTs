class stack:
    def __init__(self):
        self.stackArray = []
    
    def push(self,data):
        self.stackArray.append(data)
    def pop(self):
        data = self.stackArray[-1]
        del self.stackArray[-1]
        return data
    def len(self):
        return len(self.stackArray);

string = "[{}{})(]"
string1 = "[{}{}(]"

def checkBrackets(string):
    newStack = stack()
    openList = ["[","{","("]
    closeList =  ["]","}",")"]
    for value in string:
        if value in openList :
            newStack.push(value)
        elif value in closeList:
                comparebracket = newStack.pop()
                if openList.index(comparebracket) != closeList.index(value):
                    return "UnBalanced"

    if newStack.len() == 0: 
        return "Balanced"

print(string , " ",checkBrackets(string))
print(string1 , " ",checkBrackets(string1))