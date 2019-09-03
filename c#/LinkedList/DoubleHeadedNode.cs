using System;
using System.Collections.Generic;
using System.Text;

namespace LinkedList
{
    public class DoubleHeadedNode<T>
    {
        public T Value { get; set; }
        public DoubleHeadedNode<T> Next { get; set; }
        public DoubleHeadedNode<T> Previous { get; set; }

        public DoubleHeadedNode(T value = default(T))
        {
            Value = value;
            Next = null;
            Previous = null;
        }

    }
}
