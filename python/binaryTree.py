class Node(object):
    def __init__(self,data):
        self.data = data
        self.leftChild = None
        self.rightChild =None

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
    
    def length(self):
        return len(self.queueArray)

class Node1(object):
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
        node = Node1(data)
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
    
    def QueueSize(self):
        return self.size

class BST(object):
    def __init__(self):
        self.root = None
    
    def insert(self,data):
        if not self.root :
            self.root = Node(data)
        else:   
            self.insertNode(self.root,data)

    def insertNode(self,root,data):
        if data < root.data:
            if not root.leftChild:
                root.leftChild = Node(data)
            else:
                self.insertNode(root.leftChild,data)
        else:
            if not root.rightChild:
                root.rightChild = Node(data)
            else:
                self.insertNode(root.rightChild,data)

    def getMaxValue(self):
        if self.root:
            return self.getMax(self.root)

    def getMax(self,root):
        if root.rightChild:
            return self.getMax(root.rightChild)
        return root.data

    def getMinValue(self):
        if self.root:
            return self.getMin(self.root)

    def getMin(self,root):
        if root.leftChild:
            return self.getMin(root.leftChild)
        return root.data

    def diameter(self):
        if self.root:
            return self.diameterOFBst(self.root)

    def diameterOFBst(self,root):
        if root is None:
            return 0
        else:
            lh = self.heightOfNode(root.leftChild)
            rh = self.heightOfNode(root.rightChild)
            ld = self.diameterOFBst(root.leftChild)
            rd = self.diameterOFBst(root.rightChild)
            diameter = max(lh+rh+1,max(ld,rd))
            return diameter

    def traverse(self,traverseType):
        if self.root:
            if(traverseType=="in"):
                self.inOrderTraverse(self.root)
            elif (traverseType=="pre"):
                self.preOrderTraverse(self.root)
            elif (traverseType=="post"):
                self.postOrderTraverse(self.root)
            else:
                self.BFS(self.root)
    
    def inOrderTraverse(self,root):
        if not root:
            return
        else:
            self.inOrderTraverse(root.leftChild)
            print(root.data)
            self.inOrderTraverse(root.rightChild)

    def preOrderTraverse(self,root):
        if not root:
            return
        else:
            print(root.data)
            self.inOrderTraverse(root.leftChild)
            self.inOrderTraverse(root.rightChild)

    def postOrderTraverse(self,root):
        if not root:
            return
        else:
            self.inOrderTraverse(root.leftChild)
            self.inOrderTraverse(root.rightChild)
            print(root.data)
    
    def BFS(self,root):
        if not root:
            return
        else:
            q = QueueLinkedList()
            q.Enqueue(root)
            while q.QueueSize() >0:
                node = q.Dequeue()
                if node :
                    print(node.data)
                if node.leftChild:
                    q.Enqueue(node.leftChild)
                if node.rightChild:
                    q.Enqueue(node.rightChild)
    def height(self):
        if self.root:
            return self.heightOfNode(self.root)

    def heightOfNode(self,root):
        if root is None:
            return 0
        else:
            lh = self.heightOfNode(root.leftChild)
            rh = self.heightOfNode(root.rightChild)

            if lh< rh:
                return rh + 1
            else:
                return lh + 1

    def remove(self,value):
        if self.root:
            return self.removeNode(self.root,value)

    def mirror(self):
        if self.root :
            return self.mirrorBST(self.root)

    def mirrorBST(self,root):
        if root:
            self.mirrorBST(root.leftChild)
            self.mirrorBST(root.rightChild)
            root.leftChild,root.rightChild = root.rightChild,root.leftChild

    def LCA(self,root,node1,node2):
        if root is None:
            return None
        if root == node1 or root == node2:
            return root
        
        leftLCA = self.LCA(root.leftChild,node1,node2)
        rightLCA = self.LCA(root.rightChild,node1,node2)
        if leftLCA and rightLCA:
            return root
        else:
            return leftLCA if leftLCA else rightLCA


    def removeNode(self,root,value):
        if root is None:
            return root
        
        if value < root.data:
            self.removeNode(root.leftChild,value)
        elif value > root.data:
            self.removeNode(root.rightChild,value)
        else:
            if root.rightChild is None:
                temp = root.leftChild
                root = None
                return temp

            if root.leftChild is None:
                temp = root.rightChild
                root = None
                return temp         

            tempValue = self.getMin(root.rightChild)  
            root.data =  tempValue
            root.rightChild = self.removeNode(root.rightChild,tempValue)

def preOrder(root):
    stack = list()
    s = ""
    stack.append(root)
    while stack:
        temp = stack.pop()
        if temp is not None:
            s = s + str(temp.info) + " "
        if temp.right is not None:
            stack.append(temp.right)
        if temp.left is not None:
            stack.append(temp.left)   
    print(s)
a = []
def postOrderS(root):
    if root is not None:
        postOrderS(root.left)
        postOrderS(root.right)
        a.append(str(root.info))

def postOrder(root):
    postOrderS(root)
    print(" ".join(a))
a = []
def inOrderS(root):
    if root is not None:
        inOrderS(root.left)
        a.append(str(root.info))
        inOrderS(root.right)

def inOrder(root):
    inOrderS(root)
    print(" ".join(a))
    
bst = BST()

bst.insert(10)
bst.insert(5)
bst.insert(4)
bst.insert(15)
bst.insert(6)
bst.insert(3)
print("---------------")
# print("Min value ", bst.getMinValue())
# print("---------------")
# print("Max value ", bst.getMaxValue())
# print("---------------")
print("In orderTraverse ")
bst.traverse("in")
bst.remove(5)
print("---------------")
print("In orderTraverse ")
bst.traverse("in")
print("---------------")
# print("pre orderTraverse ")
# bst.traverse("pre")
# print(bst.height())
bst.mirror()
print("---------------")
bst.traverse("in")
print("---------------")
print(bst.diameter())