using System;
using System.Collections.Generic;
using System.Text;

namespace LinkedList
{
    public class _Stack<T>
    {
        private Node<T> _head;
        private int size = 0;
        public void Push(T value)
        {
            var newNode = new Node<T>(value);
            if(_head == null)
            {
                _head = newNode;
            }
            else
            {
                newNode.Next = _head;
                _head = newNode;
            }
            size++;
        }
        public T Pop()
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
