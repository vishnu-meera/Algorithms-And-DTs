using System;
using System.Collections;

namespace LinkedList
{
    class Program
    {
        static void Main(string[] args)
        {
            //var linkedlist = new _LinkedListClass<int>();
            //linkedlist.InsertAtEnd(9);
            //linkedlist.InsertAtFront(5);
            //linkedlist.InsertAtFront(4);
            //linkedlist.InsertAtFront(3);
            //linkedlist.InsertAtFront(2);
            //linkedlist.InsertAtFront(1);
            //linkedlist.InsertAtEnd(6);
            //linkedlist.InsertAtEnd(7);
            ////linkedlist.InsertAtEnd(8);
            ////linkedlist.RemoveFromEnd();
            ////linkedlist.RemoveFromFront();
            //linkedlist.Print();
            //Console.WriteLine("Szie {0}", linkedlist.Size());
            //Console.WriteLine("Index of 3 is {0}", linkedlist.IndexOf(3));
            ////linkedlist.Reverse();
            ////linkedlist.Print();
            //Console.WriteLine("Middle of List is {0}", linkedlist.FindMiddle());
            //Console.WriteLine("6th Node value is {0}", linkedlist.FindKthNodeFromTail(6));
            //Console.WriteLine("6th Node value is {0}", linkedlist.GetKthNode(6));

            //Stack s = new Stack();
            //s.Push(2);
            //s.Push(6);
            //s.Push(8);
            //Console.WriteLine(s);

            //_Stack<int> s2 =new _Stack<int>();
            //s2.Push(2);
            //s2.Push(6);
            //s2.Push(8);
            //Console.WriteLine(s2.Pop());
            //Console.WriteLine(s2.Pop());
            //Console.WriteLine(s2.Peek());

            var probs = new Propblems();
            Console.WriteLine(probs.ReverseString(" "));
        }
    }
}
