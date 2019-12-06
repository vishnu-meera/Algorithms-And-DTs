﻿using System;
using System.Collections.Generic;
using System.Text;

namespace LinkedList
{
    public class Node<T>
    {
        public T Value { get; set; }
        public Node<T> Next { get; set; }

        public Node(T value = default(T))
        {
            Value = value;
            Next = null; 
        }
    }
}
