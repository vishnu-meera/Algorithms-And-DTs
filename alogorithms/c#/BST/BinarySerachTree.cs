using LinkedList;
using System;
using System.Collections.Generic;
using System.Text;

namespace BST
{
    public class Node
    {
        private int _value;
        private Node leftChild;
        private Node rightChild;
        public Node (int value)
        {
            _value = value;
            leftChild = null;
            rightChild = null;
        }
        public Node RightChild
        {
            get { return rightChild; }
            set { rightChild = value; }
        }
        public Node LeftChild
        {
            get { return leftChild; }
            set { leftChild = value; }
        }
        public int Value
        {
            get { return _value; }
            set { _value = value; }
        }

    }
    public class BinarySerachTree
    {
        private Node root;
        private int _count;
        public BinarySerachTree()
        {
            root = null;
            _count = 0;
        }

        public void Insert(int value)
        {
            if (root == null)
                root = new Node(value);
            else
                insert(root, value);
            _count++;
        }

        public void Insert_I(int value)
        {
            Node newNode = new Node(value);
            if (root == null)
                root = newNode;
            else
            {
                Node node = root;
                while (node != null)
                {
                    if (value >=node.Value)
                    {
                        if (node.RightChild == null)
                        {
                            node.RightChild = newNode;
                            break;
                        }
                        else
                            node = node.RightChild;
                    }
                    else
                    {
                        if (node.LeftChild == null)
                        {
                            node.LeftChild = newNode;
                            break;
                        }
                        else
                            node = node.LeftChild;
                    }
                }
            }
            _count++;
        }

        private void insert(Node node, int value)
        {
            if (value >= node.Value)
            {
                if (node.RightChild == null)
                    node.RightChild = new Node(value);
                else
                    insert(node.RightChild, value);
            }
            else
            {
                if (node.LeftChild == null)
                    node.LeftChild = new Node(value);
                else
                    insert(node.LeftChild, value);
            }
        }

        public void Traverse(string traverse)
        {
            Console.WriteLine("${1} *********************** {0}", traverse,traverse);
            switch (traverse)
            {
                case "IN":
                    InOrderTravese(root);
                    break;
                case "PRE":
                    PreOrderTravese(root);
                    break;
                case "POST":
                    PostOrderTravese(root);
                    break;
                case "BFS":
                    BFS(root);
                    break;
            }
        }
        private void BFS(Node root)
        {
            if (root != null)
            {
                _Queue<Node> q = new _Queue<Node>();
                q.Enqueue(root);
                while (!q.isEmpty())
                {
                    var node = q.Dequeue();
                    if (node != null)
                        Console.WriteLine("Element : {0}", node.Value);
                    if (node.LeftChild != null)
                        q.Enqueue(node.LeftChild);
                    if (node.RightChild != null)
                        q.Enqueue(node.RightChild);
                }
            }
        }

        private void PostOrderTravese(Node root)
        {
            if (root != null)
            {
                InOrderTravese(root.LeftChild);
                InOrderTravese(root.RightChild);
                Console.WriteLine("Element : {0}", root.Value);
            }
        }

        private void PreOrderTravese(Node root)
        {
            if (root != null)
            {
                Console.WriteLine("Element : {0}", root.Value);
                InOrderTravese(root.LeftChild);
                InOrderTravese(root.RightChild);
            }
        }

        private void InOrderTravese(Node root)
        {
            if (root != null)
            {
                InOrderTravese(root.LeftChild);
                Console.WriteLine("Element : {0}", root.Value);
                InOrderTravese(root.RightChild);
            }
        }

        public int GetMax()
        {
            if (root == null)
                return 0;
            var node = root;
            while (node.RightChild != null)
            {
                node = node.RightChild;
            }
            return node.Value;
        }

        public int GetMin()
        {
            if (root == null)
                return 0;
            var node = root;
            while (node.LeftChild != null)
            {
                node = node.LeftChild;
            }
            return node.Value;
        }

        public int Height()
        {
            return Height(root);
        }

        private int Height(Node root)
        {
            if (root is null)
                return 0;
            else
            {
                int lh = Height(root.LeftChild);
                int rh = Height(root.RightChild);

                if (lh > rh)
                    return lh + 1;
                else
                    return rh + 1;
            }
        }


    }
}
