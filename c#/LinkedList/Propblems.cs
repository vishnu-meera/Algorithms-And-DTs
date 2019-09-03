using System;
using System.Collections.Generic;
using System.Text;

namespace LinkedList
{
    public class Propblems
    {
        public void ReverseString(char[] s)
        {
            if (s.Length > 0)
            {
                var i = s.Length - 1;
                var j = 0;
                while (true)
                {
                    char c = s[j];
                    s[j] = s[i];
                    s[i] = c;
                    i--;
                    j++;
                    if (i <= j)
                        break;
                }
            }
        }

        public string ReverseString(string s)
        {
            var stack = new _Stack<char>();
            var retString = new StringBuilder();

            foreach (var c in s)
                stack.Push(c);

            while (!stack.isEmpty())
                retString.Append(stack.Pop());

            return retString.ToString();
        }

        //public string FirstNonRepetiveCharacter(string s)
        //{
        //    const occurrences = [];
        //    const charCodeBase = 'a'.charCodeAt(0);

        //    for (let i = 0; i < s.length; i++)
        //    {
        //        if (!occurrences[s.charCodeAt(i) - charCodeBase])
        //            occurrences[s.charCodeAt(i) - charCodeBase] = 1;
        //        else
        //            occurrences[s.charCodeAt(i) - charCodeBase]++;
        //    }

        //    for (let i = 0; i < s.length; i++)
        //    {
        //        let p = s.charCodeAt(i) - charCodeBase;
        //        if (occurrences[s.charCodeAt(i) - charCodeBase] === 1) return i;
        //    }

        //    return -1;
        //}

        public string BalancedBracket(string s)
        {
            _Stack<char> _stackLeft = new _Stack<char>();
            foreach (char c in s)
            {
                switch (c)
                {
                    case '{':
                    case '[':
                    case '(':
                    case '<':
                        _stackLeft.Push(c);
                        break;
                    case '}':
                        if (_stackLeft.isEmpty() || _stackLeft.Peek() != '{')
                            return "NO";
                        _stackLeft.Pop();
                        break;
                    case ']':
                        if (_stackLeft.isEmpty() || _stackLeft.Peek() != '{')
                            return "NO";
                        _stackLeft.Pop();
                        break;
                    case ')':
                        if (_stackLeft.isEmpty() || _stackLeft.Peek() != '{')
                            return "NO";
                        _stackLeft.Pop();
                        break;
                    case '>':
                        if (_stackLeft.isEmpty() || _stackLeft.Peek() != '{')
                            return "NO";
                        _stackLeft.Pop();
                        break;
                }
            }
            if (_stackLeft.isEmpty())
                return "YES";
            else
                return "NO";
        }

        //public int LargestRectangle(int[] histogram)
        //{
        //    int area = 0;
        //    Stack<int> _s = new Stack<int>();
        //    int index = 0;

        //    n

        //    while(index < histogram.Length)
        //    {
        //        if(_s.Count==0 || histogram[index] > histogram[_s.Peek()])
        //        {
        //            _s.Push(index);
        //            index++;
        //        }
        //        else
        //        {
        //            int topOfStack = _s.Peek();
        //            _s.Pop();
        //            int tempArea = histogram[topOfStack] * (_s.Count == 0 ? index : index - _s.Peek() - 1);
        //            area = Math.Max(area, tempArea);
        //        }
        //    }

        //    while(_s.Count != 0)
        //    {
        //        int topOfStack = _s.Peek();
        //        _s.Pop();
        //        int tempArea = histogram[topOfStack] * (_s.Count == 0 ? index : index - _s.Peek() - 1);
        //        area = Math.Max(area, tempArea);
        //    }
        //    return area;
        //}

        public int[] cellCompete(int[] states, int days)
        {
            int[] tempstates = new int[states.Length];
            int n = states.Length;
            int i = 0;

            while (i < n)
            {
                tempstates[i] = states[i];
                i += 1;
            }



            while (days > 0)
            {
                tempstates[0] = 0 ^ states[1];
                tempstates[n - 1] = states[n - 2] ^ 0;
                i = 1;
                while (i < n - 1)
                {
                    tempstates[i] = states[i - 1] ^ states[i + 1];
                    i += 1;
                }

                i = 0;
                while (i < n)
                {
                    states[i] = tempstates[i];
                    i += i;
                }
                days -= i;
            }
            return tempstates;

        }


        public List<int> IDsOfPackages(int truckSpace, List<int> packagesSpace)
        {
            int targetspace = truckSpace - 30;
            List<int> returnList = new List<int>();

            for (int i = 0; i < packagesSpace.Count; i++)
            {
                if (returnList.Count == 2)
                {
                    break;
                }

                int space = packagesSpace[i];
                for (int j = i + 1; j < packagesSpace.Count; j++)
                {
                    int sum = space + packagesSpace[j];
                    if (sum == targetspace)
                    {
                        returnList.Add(i);
                        returnList.Add(j);
                    }
                }
            }

            return returnList;
        }

        private int finalDistance;
        public int minimumDistance(int numRows, int numColumns, int[,] area)
        {
            bool[,] visited = new bool[numRows, numColumns];
            int distance = 0;
            if (Helper(numRows, numColumns, area, visited, 0, 0, distance))
            {
                return finalDistance;
            }
            else
                return -1;


        }

        private bool Helper(int numRows, int numColumns, int[,] area, bool[,] visited, int currentRow, int currentColumn, int distance)
        {
            if (currentColumn < 0 || currentRow < 0 || currentRow >= numRows || currentColumn >= numRows)
                return false;
            if (visited[currentRow,currentColumn])
                return false;
            if (area[currentRow, currentColumn] == 0)
                return false;
            if (area[currentRow, currentColumn] == 9)
                return true;
            distance++;

            visited[currentRow, currentColumn] = true;
            if (Helper(numRows, numColumns, area, visited, currentRow++, currentColumn, distance) ||
                Helper(numRows, numColumns, area, visited, currentRow--, currentColumn, distance) ||
                Helper(numRows, numColumns, area, visited, currentRow, currentColumn++, distance) ||
                Helper(numRows, numColumns, area, visited, currentRow, currentColumn--, distance))
            {
                if (finalDistance == 0)
                {
                    finalDistance = distance;
                }
                return true;
            }
            else
                return false;
        }
    }
}
