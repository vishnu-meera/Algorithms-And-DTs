using System;

namespace c_
{
    public class Nullable<T> where T :struct
    {
        private object _value;
        public Nullable()
        {
            
        }
        public Nullable(T value)
        {
            _value = value;
        }
        public bool HasValue{
            get {return _value!=null;}
        }
        public T GetValueOrDefault()
        {
            if(HasValue)
                return (T) _value;

            return default(T);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            
            DateTime? date= null;
            DateTime date2 = date ?? DateTime.Today;
            
            Console.WriteLine("vishnu in deepshit" , date.GetValueOrDefault());
        }
    }
}
