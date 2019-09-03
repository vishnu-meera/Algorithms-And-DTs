using System;
using System.Collections.Generic;
namespace arrays
{
    public class Program
    {
        public static string ArrayToString<T>(IEnumerable<T> list){
           return "[" + string.Join(",",list) + "]";
        }
        public static void Main(string[] args)
        {
            // string[] stringArray = new string[4];
            // stringArray[0]="Vishnu";
            // stringArray[1]="Meera";
            // stringArray[2]="Ayaan";
            // stringArray[3]="Prasanna";
            // string[] newArray = {
            //     "Appu", "Ajisha","Sreekanth","Hari"
            // };
            // Console.WriteLine(ArrayToString(stringArray));
            // Console.WriteLine(ArrayToString(newArray));

            var array = new _Array<int>(7);
            array.insert(10);
            array.insert(9);
            array.insert(7);
            array.insert(8);
            array.insert(9);
            array.insert(1);
            array.insert(5);
            array.print();
            Console.WriteLine("--------------1");
            array.i_mergesort();
            array.print();
            Console.WriteLine("--------------2");
            //array.insert(11);
            //array.removeAt(4);
            //Console.WriteLine("--------------1");
            //Console.WriteLine(array.max());
            //Console.WriteLine("--------------2");
            //array.print();
            //Console.WriteLine(array.indexOf(6));
            //Console.WriteLine("--------------3");
            ////Console.WriteLine("End");

            //var array2 = new _Array<string>(3);
            //array2.insert("Meera");
            //array2.insert("Ayaan");
            //array2.insert("Vishnu");
            //array2.insert("Appu");
            //array2.insert("VPrasanna");
            //Console.WriteLine(array2.max());
            //Console.WriteLine("--------------4");
            //array2.print();
        }
    }
}
