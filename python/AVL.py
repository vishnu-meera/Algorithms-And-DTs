class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None
        self.H = 0

class AVL:
    def __init__(self):
        self.root = None
    
    def getHeight(self,node):
        if node is not None:
            return node.H
        else:
            return -1

    def balance(self,node):
        if node is None:
            return 0
        return self.getHeight(node.left) - self.getHeight(node.right)

    def rightRotation(self,node):
        print("Right Rotation : ", node.data)
        tempLeftNode = node.left
        t = tempLeftNode.right

        tempLeftNode.right = node
        node.left = t

        node.H = max(self.getHeight(node.left),self.getHeight(node.right)) + 1
        tempLeftNode.H = max(self.getHeight(tempLeftNode.left),self.getHeight(tempLeftNode.right)) + 1

        return tempLeftNode

    def leftRotation(self,node):
        print("Left Rotation : ", node.data)
        tempRightNode = node.right
        t = tempRightNode.left

        tempRightNode.left = node
        node.right = t

        node.H = max(self.getHeight(node.left),self.getHeight(node.right)) + 1
        tempRightNode.H = max(self.getHeight(tempRightNode.left),self.getHeight(tempRightNode.right)) + 1

        return tempRightNode

    def insert(self,data):
        self.root = self.insertNode(data,self.root)

    def insertNode(self,data,node):
        if not node:
            return Node(data)

        if data < node.data:
            print("Insert Left")
            node.left = self.insertNode(data,node.left)
        else:
            print("Insert Right")
            node.right = self.insertNode(data,node.right)

        H = max(self.getHeight(node.left),self.getHeight(node.right)) + 1
        print("getHeight of ", data,H)
        node.H = H

        return self.checkViolation(data,node)

    def checkViolation(self,data,node):
        balance = self.balance(node)
        print("balance ", balance)
        if balance > 1 and data < node.data:
            print("Left Left")
            return self.rightRotation(node)

        if balance > 1 and data > node.data:
            print("Left Right")
            node.left = self.leftRotation(node.left)
            return self.rightRotation(node)
        
        if balance < -1 and data > node.data:
            print("Right Right")
            return self.leftRotation(node)

        if balance < -1 and data < node.data:
            print("Right Left")
            node.right = self.rightRotation(node.right)
            return self.leftRotation(node)

        return node

    def traverse(self):
        if self.root is not None:
            self.traverseInOrder(self.root)

    def traverseInOrder(self,node):
        if node.left is not None:
            self.traverseInOrder(node.left)
        print("%s" % node.data)
        if node.right is not None:
            self.traverseInOrder(node.right)       

    def remove(self,data):
        self.root = self.removeNode(data,self.root)

    def removeNode(self,data,node):
        if not node :
            return node

        if data  < node.data:
            node.left = self.removeNode(data,node.left)
        elif data > node.data:
            node.right = self.removeNode(data,node.right)
        else:
            if node.left is None and node.right is None:
                del node
                return None
            elif node.left is None:
                tempNode = node.right
                del node
                return tempNode
            elif node.right is None:
                tempNode = node.left
                del node
                return tempNode
            else:
                tempNode = self.getPredescor(node.left)
                node.data = tempNode.data
                node.left = self.removeNode(tempNode.data,node.left)

        if not node:
            return node

        node.H = max(self.getPredescor(node.left),self.getPredescor(node.right)) + 1

        balance = self.balance(node)
        if balance > 1 and self.balance(node.left) >=0:
            self.rightRotation(node)
        
        if balance > 1 and self.balance(node.left) < 0:
            node.left = self.leftRotation(node.left)
            self.rightRotation(node)

        if balance < -1 and self.balance(node.right) <=0:
            self.leftRotation(node)

        if balance < -1 and self.balance(node.right) > 0:
            node.right = self.rightRotation(node.right)
            self.leftRotation(node)

        return node

    def getPredescor(self,node):
        if node.right is not None:
            return self.getPredescor(node.right)
        return node

avl = AVL()
avl.insert(10)
avl.insert(20)
avl.insert(30)
avl.insert(40)
avl.insert(50)
avl.traverse()