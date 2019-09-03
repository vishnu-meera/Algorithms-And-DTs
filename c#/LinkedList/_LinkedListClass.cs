using System;
using System.Collections.Generic;
using System.Text;

namespace LinkedList
{
    public class _LinkedListClass<T>
    {
        private Node<T> _head;
        private Node<T> _tail;
        private int count = 0;

        public void InsertAtFront(T value)
        {
            if(_head == null)
            {
                _head = new Node<T>(value);
                _tail = _head;
            }
            else
            {
                var newNode = new Node<T>(value);
                newNode.Next = _head;
                _head = newNode;
            }
            count++;
        }

        public void InsertAtEnd(T value)
        {
            if (_head == null)
            {
                _head = new Node<T>(value);
                _tail = _head;
            }
            else
            {
                var newNode = new Node<T>(value);
                _tail.Next = newNode;
                _tail = newNode;
            }
            count++;
        }

        public void RemoveFromFront()
        {
            if (count==0)
            {
                throw new Exception("List is empty");
            }

            if(count==1)
            {
                _head = _tail = null;
                count--;
                return;
            }

            _head = _head.Next;
            count--;
        }

        public void RemoveFromEnd()
        {
            if (count == 0)
            {
                throw new Exception("List is empty");
            }

            if (count == 1)
            {
                _head = _tail = null;
                count--;
                return;
            }

            var node = _head;
            while(node.Next.Next != null)
            {
                node = node.Next;
            }
            node.Next = null;
            _tail = node;
            count--;
        }

        public int IndexOf(int value)
        {
            if (count == 0)
            {
                throw new Exception("List is empty");
            }

            var node = _head;
            var cnt = 0;
            while (node != null)
            {
                if (node.Value.Equals(value))
                    return cnt;
                node = node.Next;
                cnt++;
            }
            return -1;
        }

        public bool Contains(int value)
        {
            if (count == 0)
            {
                throw new Exception("List is empty");
            }

            var node = _head;
            while (node != null)
            {
                if (node.Value.Equals(value))
                    return true;
                node = node.Next;
            }
            return false;
        }

        public void Print()
        {
            var node = _head;
            while (node != null)
            {
                Console.WriteLine(node.Value);
                node = node.Next;
            }
            Console.WriteLine("----------------------");
        }

        public int Size() { return count; }

        public void Reverse()
        {
            if (count == 0)
            {
                throw new Exception("List is empty");
            }

            var curNode = _head;
            Node<T> nextNode = null;
            Node<T> prevNode = null;
            while (curNode !=null)
            {
                nextNode = curNode.Next;
                curNode.Next = prevNode;
                prevNode = curNode;
                curNode = nextNode;
            }
            _tail = _head;
            _tail.Next = null;
            _head = prevNode;
        }

        public T FindMiddle()
        {
            if (count == 0)
            {
                throw new Exception("List is empty");
            }

            if (count == 1 || count ==2)
            {
                return _head.Value;
            }

            var firstPointer = _head.Next;
            if (firstPointer != null)
            {
                var secondPointer = _head.Next.Next;
                if (count % 2 == 0)
                {
                    while (secondPointer != null)
                    {
                        secondPointer = secondPointer.Next.Next;
                        firstPointer = firstPointer.Next;
                    }
                }
                else
                {
                    while (secondPointer.Next != null)
                    {
                        secondPointer = secondPointer.Next.Next;
                        firstPointer = firstPointer.Next;
                    }
                }
            }

            return firstPointer.Value;
        }

        public T FindKthNodeFromTail(int kthNode)
        {
            if (count == 0)
            {
                throw new Exception("List is empty");
            }

            if(count - kthNode < 0)
            {
                throw new Exception("List length is less than given node number");

            }

            if (count-kthNode == 0)
            {
                return _tail.Value;
            }

            var tempCount = 0;
            var node = _head;
            Node<T> ret = null;

            while (node != null)
            {
                if (tempCount + kthNode == count)
                {
                    ret = node;
                    break;
                }
                node = node.Next;
                tempCount++;
            }

            return ret.Value;
        }

        public T GetKthNode(int k)
        {
            if (_head == null)
            {
                throw new Exception("List is empty");
            }

            var secondNode = _head;
            var firstNode = _head;
            for (int i = 0; i < k - 1; i++)
            {
                secondNode = secondNode.Next;
                if(secondNode == null)
                    throw new Exception("List length is less than given node number");
            }

            while (secondNode !=_tail)
            {
                secondNode = secondNode.Next;
                firstNode = firstNode.Next;
            }

            return firstNode.Value;
        }
    }
}
