class Node:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None
        self.hd = 0

class BST:
    def __init__(self):
        self.root = None
        self.count = 0

    def insert(self,value):
        node = Node(value)
        if self.root is None:
            self.root = node
        else:
            curNode = self.root
            while True:
                if value <= curNode.val:
                    if curNode.left is None:
                        curNode.left = node
                        break
                    else:
                        curNode = curNode.left
                else:
                    if curNode.right is None:
                        curNode.right = node
                        break
                    else:
                        curNode = curNode.right
        self.count += 1

    def traverse(self,way):
        if way == "in":
            self.inOrder()
            self.inOrderTraverse(self.root)
        elif way == "pre":
            self.preOrder(self.root)
            self.preOrderTraverse(self.root)
        elif way == "bfs":
            self.levelOrderTraverse()
            
    def find(self,value):
        curNode = self.root
        while curNode:
            if value == curNode.val:
                return True
            else:
                if value < curNode.val:
                    curNode = curNode.left
                else:
                    curNode = curNode.right
        return False

    def inOrder(self):
        curNode = self.root
        stack = list()
        while True:
            if curNode is not None:
                stack.append(curNode)
                curNode = curNode.left
            elif stack:
                curNode = stack.pop()
                print(curNode.val)
                curNode = curNode.right
            else:
                break

    def inOrderTraverse(self,root):
        if not root:
            return
        else:
            self.inOrderTraverse(root.left)
            print(root.val)
            self.inOrderTraverse(root.right)

    def preOrder(self,node):
        stack = list()
        curNode = node
        stack.append(curNode)
        while stack:
            nod = stack.pop()
            if nod is not None:
                print(nod.val)
            if nod.right is not None:
                stack.append(nod.right)
            if nod.left is not None:
                stack.append(nod.left)

    def preOrderTraverse(self,root):
        if not root:
            return
        else:
            print(root.val)
            self.preOrderTraverse(root.left)
            self.preOrderTraverse(root.right)

    def postOrder(self,node):
        pass

    def postOrderTraverse(self,root):
        if not root:
            return
        else:
            self.postOrderTraverse(root.left)
            self.postOrderTraverse(root.right)
            print(root.val) 
    
    def levelOrderTraverse(self):
        queue = list()
        curnode = self.root
        queue.append(curnode)
        while queue:
            curnode = queue.pop(0)
            if curnode is not None:
                print(curnode.val)
                queue.append(curnode.left)
                queue.append(curnode.right)
    def getMin(self):
        return self.__min(self.root)

    def getMax(self):
        return self.__max(self.root)
    def height(self):
        return self.__H(self.root)

    def __H(self,node):
        if node is None:
            return 0
        else:
            return max(self.__H(node.left),self.__H(node.right)) + 1 #post order traversa
    def __min(self,node):
        if node.left is None and node.right is None:
            return node.val
        minLeft = self.__min(node.left)
        minRight = self.__min(node.right)
        return min(min(minLeft,minRight),node.val)

    def __max(self,node):
        if node.left is None and node.right is None:
            return node.val
        l = self.__max(node.left)
        r = self.__max(node.right)
        return max(max(l,r),node.val)

    @staticmethod
    def equals(node1, node2):
        if node1 is None and node2 is None:
            return True
        if (node1 is not None and node2 is None) or (node1 is None and node2 is not None) :
            return False
        if node1 is not None and node2 is not None:
            return (node1.val == node2.val) and BST.equals(node1.left,node2.left) and BST.equals(node1.right,node2.right)

    def isIsomorphic(self):
        node1 = self.root
        node2 = self.root
        def __isIsomorphic(node1,node2):
            if node1 is None and node2 is None:
                return True
            if (node1 and node2 is None) or (node2 and node1 is None) :
                return False
            return node1.val == node2.val and __isIsomorphic(node1.left,node2.right) and __isIsomorphic(node1.right,node2.left)
        return __isIsomorphic(node1,node2)

    def isBinarySearchTree(self):
        curnode = self.root
        stack = list()
        stack.append(curnode)
        while stack:
            temp = stack.pop()
            if temp.left is not None:
                if temp.left.val >= temp.val:
                    return False
                else:
                    stack.append(temp.left)
            if temp.right is not None:
                if temp.right.val < temp.val:
                    return False
                else:
                    stack.append(temp.right)          
        return True

    def isBinarySearchTreeR(self):
        return self.__isBinary(self.root,0,100)

    def __isBinary(self,node,mini,maxi):
        if node is None:
            return True
        if node.val < mini or node.val > maxi:
            return False
        
        return self.__isBinary(node.left,mini,node.val-1) and self.__isBinary(node.right,node.val+1,maxi)

    def nodesAtKDistance(self,k):
        stack = list()
        curnode = self.root

        def __nodeatKthdistance(curnode,k):
            if curnode is not None:
                if k == 0:
                    stack.append(curnode.val)
                __nodeatKthdistance(curnode.left,k-1)
                __nodeatKthdistance(curnode.right,k-1)

        __nodeatKthdistance(curnode,k)

        return stack

    def size(self):
        curnode = self.root
        def sizeoftree(node):
            if node is None:
                return 0
            return sizeoftree(node.left) + sizeoftree(node.right) + 1
        return sizeoftree(curnode)
             
    def size_i(self):
        curnode = self.root
        q = list()
        q.append(curnode)
        count = 1
        while q:
            curnode =  q.pop(0)
            if curnode.left is not None :
                q.append(curnode.left)
                count += 1
            if curnode.right is not None :
                q.append(curnode.right)
                count += 1

        return count

    def leafs(self):
        curnode = self.root
        q = list()
        q.append(curnode)
        count = 0
        while q:
            curnode =  q.pop(0)
            if curnode.left is None and curnode.right is None:
                count += 1
            else:
                if curnode.right is not None :
                    q.append(curnode.right)
                if curnode.left is not None :
                    q.append(curnode.left)
        return count

    def getMaxBST(self):
        nod = self.root
        def __getMax(node):
            if node.right is None:
                return node.val
            return __getMax(node.right)
        return __getMax(nod)

    def areSiblings(self,m,n):
        q = list()
        cNode = self.root
        q.append(cNode)
        while q:
            cNode = q.pop(0)
            if cNode.left is not None and cNode.right is not None:
                k , l = cNode.left.val , cNode.right.val
                if (k == m and l == n) or (k == n and l == m):
                    return True
                else:
                    q.append(cNode.left)
                    q.append(cNode.right)
            elif cNode.left is not None :
                q.append(cNode.left)
            elif cNode.right is not None :
                q.append(cNode.right)
        return False

    def ancestors(self,no):
        curNode = self.root
        stack = list()
        def __ancestors(node,no):
            if node is None:
                return False
            if node.val == no:
                return True

            if (__ancestors(node.left,no) or __ancestors(node.right,no)):
                stack.append(node.val)
                return True
        __ancestors(curNode,no)
        return stack

    def lca_hardway(self,no1,no2):
        cn = self.root
        arr1 = list()
        arr2 = list()

        def __ancestors(node,arr,no):
            if node is None:
                return False
            if node.val == no:
                return True
            if (__ancestors(node.left,arr,no)) or (__ancestors(node.right,arr,no)):
                arr.append(node.val)
                return True
        __ancestors(cn,arr1,no1)
        __ancestors(cn,arr2,no2)
        i = 0
        while i < len(arr1) and i <len(arr2):
            if arr1[i] != arr2[i]:
                break
            i += 1

        return arr1[i-1]

    def lca(self,no1,no2):
        curNode = self.root
        def __lca(node):
            if node is None:
                return node
            if node.val == no1 or node.val == no2:
                return node

            left = __lca(node.left)
            right = __lca(node.right)

            if left and right:
                return node

            return left if left else right
        return __lca(curNode)

    def isSumProperty(self):
        q = list()
        cNode = self.root
        q.append(cNode)
        while q:
            cNode = q.pop(0)
            if cNode.left is not None and cNode.right is not None:
                k , l = cNode.left.val , cNode.right.val
                if (cNode.val != k+l):
                    return False
                else:
                    q.append(cNode.left)
                    q.append(cNode.right)
            elif cNode.left is not None :
                q.append(cNode.left)
            elif cNode.right is not None :
                q.append(cNode.right)
        return False

    def topView(self):
        q = list()
        m = dict()
        hd = 0
        cn = self.root
        cn.hd = hd
        q.append(cn)
        while q:
            cn = q.pop()
            hd = cn.hd
            if hd not in m:
                m[hd] = cn.val
            if cn.left :
                cn.left.hd = hd -1
                q.append(cn.left)
            if cn.right :
                cn.right.hd = hd + 1
                q.append(cn.right)

        for i in sorted(m):
            print(m[i])

    def btView(self):
        q = list()
        m = dict()
        hd = 0
        cn = self.root
        cn.hd = hd
        q.append(cn)
        while q:
            cn = q.pop()
            hd = cn.hd
            m[hd] = cn.val
            if cn.left :
                cn.left.hd = hd -1
                q.append(cn.left)
            if cn.right :
                cn.right.hd = hd + 1
                q.append(cn.right)

        for i in sorted(m):
            print(m[i])
bst = BST()
bst.insert(7)
bst.insert(4)
bst.insert(9)
bst.insert(1)
bst.insert(6)
bst.insert(8)
bst.insert(10)
bst.insert(16)
# bst1 = BST()
# bst1.insert(7)
# bst1.insert(4)
# bst1.insert(9)
# bst1.insert(1)
# bst1.insert(6)
# bst1.insert(8)

bst.traverse("bfs")
print("************************")
print(bst.nodesAtKDistance(1))
print(bst.size())
print(bst.size_i())
print(bst.leafs())
print(bst.getMaxBST())
print(bst.areSiblings(1,6))
print(bst.ancestors(16))
print(bst.lca_hardway(1,6))
print(bst.lca(1,6))
print(bst.isIsomorphic())
print(bst.btView())
b = BST()
b.root = Node(1) 
b.root.left = Node(2) 
b.root.right = Node(2) 
b.root.left.left = Node(3) 
b.root.left.right = Node(4) 
b.root.right.left = Node(4) 
b.root.right.right = Node(3) 
print("************************")
print(b.isIsomorphic())
#print(BST.equals(bst1.root,bst.root))
# print(bst.height())
# print(bst.getMin())
# print(bst.getMax())
