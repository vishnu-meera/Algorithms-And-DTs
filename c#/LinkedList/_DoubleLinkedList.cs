using System;
using System.Collections.Generic;
using System.Text;

namespace LinkedList
{
    public class _DoubleLinkedList<T>
    {
        private DoubleHeadedNode<T> _head;
        private DoubleHeadedNode<T> _tail;
        private int count = 0;

        public void InsertAtFront(T value)
        {
            if (_head == null)
            {
                _head = new DoubleHeadedNode<T>(value);
                _tail = _head;
            }
            else
            {
                var newNode = new DoubleHeadedNode<T>(value);
                newNode.Next = _head;
                _head.Previous = newNode;
                _head = newNode;
            }
            count++;
        }

        public void InsertAtEnd(T value)
        {
            if (_head == null)
            {
                _head = new DoubleHeadedNode<T>(value);
                _tail = _head;
            }
            else
            {
                var newNode = new DoubleHeadedNode<T>(value);
                _tail.Next = newNode;
                newNode.Previous = _tail;
                _tail = newNode;
            }
            count++;
        }

        public void RemoveFromFront()
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

            _head = _head.Next;
            _head.Previous = null;
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

            _tail = _tail.Previous;
            _tail.Next = null;
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
            DoubleHeadedNode<T> nextNode = null;
            DoubleHeadedNode<T> prevNode = null;
            while (curNode != null)
            {
                nextNode = curNode.Next;
                curNode.Next = prevNode;
                prevNode = curNode;
                curNode = nextNode;
                if(curNode != null) curNode.Previous = prevNode;
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

            if (count == 1 || count == 2)
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
    }
}
