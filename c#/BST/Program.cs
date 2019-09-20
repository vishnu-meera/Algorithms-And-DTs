using System;

namespace BST
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var bst = new BinarySerachTree();
            bst.Insert_I(10);
            bst.Insert_I(8);
            bst.Insert_I(15);
            bst.Insert_I(7);
            bst.Insert_I(9);
            bst.Insert_I(13);
            bst.Insert_I(16);
            bst.Traverse("IN");
            bst.Traverse("PRE");
            bst.Traverse("POST");
            Console.WriteLine("Max of bst is  : {0}", bst.GetMax());
            bst.Traverse("BFS");
            Console.WriteLine("Height of bst is  : {0}", bst.Height());
        }
    }
}
