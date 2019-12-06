using System;
using System.Collections.Generic;
using System.Text;

namespace arrays
{
    public class Q
    {
        private int[] items;
        private int rear;
        private int count;
        private int front;

        public Q(int capacity)
        {
            items = new int[capacity];
            rear = front = count = 0;
        }

        public void EnQ(int value)
        {
            if (count == items.Length)
                throw new InvalidOperationException();
            items[rear] = value;
            rear = (rear + 1) % items.Length;
            count++;
        }

        public int DnQ()
        {
            var i = items[front];
            items[front] = 0;
            front = (front+1)%items.Length;
            count--;
            return i;
        }

        public int Peek()
        {
            return 0;
        }

        public bool isEmpty()
        {
            return false;
        }

        public void print()
        {
            Console.WriteLine("****************************************************** {0} {1} {2}",front,rear,count);
            for (int i = rear; i <items.Length; i++)
            {
                Console.WriteLine(items[i]);
            }
            for (int i = 0; i < front; i++)
            {
                Console.WriteLine(items[i]);
            }
        }
    }

    public class QbyStack
    {

    }
}
