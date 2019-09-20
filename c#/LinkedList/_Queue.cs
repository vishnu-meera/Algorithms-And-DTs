using System;
using System.Collections.Generic;
using System.Text;

namespace LinkedList
{
    public class _Queue<T>
    {
        private Node<T> _head;
        private Node<T> _tail;
        private int size = 0;
        public void Enqueue(T value)
        {
            var newNode = new Node<T>(value);
            if (_head == null)
            {
                _head = _tail = newNode;
            }
            else
            {
                _tail.Next = newNode;
                _tail = newNode;
            }
            size++;
        }
        public T Dequeue()
        {
            if (isEmpty())
                throw new Exception("Stack is empty!!!");

            T value = _head.Value;
            _head = _head.Next;
            size--;
            return value;
        }
        public T Peek()
        {
            if (isEmpty())
                throw new Exception("Stack is empty!!!");

            return _head.Value; ;
        }
        public bool isEmpty()
        {
            if (size > 0)
                return false;
            else
                return true;
        }
    }

}
