using System;

namespace arrays
{
    public class _Array<T>
    {
        private T[] items;
        private int count = 0;

        public _Array(int length){
            items = new T[length];
        }
        public void insert(T item){
            if(items.Length==count){
                T[] newItems = new T[2*count];
                for (int i = 0; i < items.Length; i++)
                {
                    newItems[i]=items[i];
                }
                items = newItems;
            }
            items[count++] = item;
        }
        public void removeAt(int index){
            for (int i = index; i < count; i++)
            {
                items[i]=items[i+1];
            }
            count--;
        }
        public int indexOf(T item){
            for (int i = 0; i < items.Length; i++)
            {
                if (items[i].Equals(item))
                    return i;
            }
            return -1;
        }
        public void print(){
            for (int i = 0; i < items.Length; i++)
            {
                Console.WriteLine(items[i]);
            }
        }
        private int Compare(T a, T b)
        {
            var ac = a as IComparable;
            var bc = b as IComparable;

            if (ac == null & bc == null)
                return 0;
            if (ac == null)
                return 1;
            if (bc == null)
                return 0;
            
            return bc.CompareTo(ac);
        }
        public T max()
        {
            T maxvalue = items[0];
            for (int i = 0; i < items.Length; i++)
            {
                if(Compare(maxvalue,items[i]) >0)
                    maxvalue = items[i];
            }
            return maxvalue;
        }

        private int lomutoPartition(int low, int high)
        {
            T pivot = items[high];
            int i = low;
            for (int j = low; j <=high-1; j++)
            {
                if (Compare(items[j],pivot)>0)
                {
                    T t = items[j];
                    items[j] = items[i];
                    items[i] = t;
                    i++;
                }
            }
            T temp = items[high];
            items[high] = items[i];
            items[i] = temp;

            return i;
        }

        private int hoarePartition(int low, int high)
        {
            T pivot = items[low];
            int i = low-1, j = high+1;
            while (i<j)
            {
                do
                {
                    i++;
                } while (Compare(items[i], pivot) >0);

                do
                {
                    j--;
                } while (Compare(pivot, items[j]) > 0);

                if (i < j)
                {
                    T t = items[j];
                    items[j] = items[i];
                    items[i] = t;
                }


            }
            T t1 = items[low];
            items[low] = items[j];
            items[j] = t1;
            return j;
        }

        public void quciksort()
        {
            int low = 0;
            int high = items.Length-1;
            qucik(low, high);

        }
        private void qucik(int low,int high)
        {
            if (low < high)
            {
                int pi = hoarePartition(low, high); //lomutoPartition(low, high);
                qucik(low, pi - 1);
                qucik(pi + 1, high);
            }
        }
    };
}