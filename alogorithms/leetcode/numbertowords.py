m = {
    1:"One",2:"Two",3:"Three", 4:"Four", 5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",10:"Ten",
    11 :"Eleven",12 :"Twelve",13:"Thirteen",14:"Fourteen",15:"Fifteen",16:"Sixteen",17:"Seventeen",18:"Eighteen",
    19:"Nineteen",20:"Twenty",30:"Thirty",40:"Forty",50:"Fifty",60:"Sixty",70:"Seventy",80:"Eighty",90:"Ninety"
}
def numberToWords( num):
    string = ""
    if num==0:
        return "Zero"
    def __notowords(num,s):
        if num==0:
            return ""

        while (num > 0):
            if num <100:
                if num in m:
                    return m[num]
                else:
                    return m[num-num%10] + " " + m[num%10]
            elif num>=100 and num<1000:
                x = num//100
                if x in m:
                    return s + m[num//100] + "Hundred " + __notowords(num%100,s)
                else:
                    return s + __notowords(x,s)  + "Hundred " + __notowords(num%100,s) 
            elif num>=1000 and num<1000000:
                x = num//1000
                if x in m:
                    return s + m[num//1000] + "Thousand " + __notowords(num%1000,s)
                else:
                    return s + __notowords(x,s)  + "Thousand " + __notowords(num%1000,s) 
            elif num>=1000000 and num<1000000000:
                x = num//1000000
                if x in m:
                    return s + m[num//1000000] + "Million " + __notowords(num%1000000,s)
                else:
                    return s + __notowords(x,s)  + "Million " + __notowords(num%1000000,s) 
            else:
                x = num//1000000000
                if x in m:
                    return s + m[num//1000000000] + "Billion " + __notowords(num%1000000000,s)
                else:
                    return s + __notowords(x,s)  + "Billion " + __notowords(num%1000000000,s) 
        return s
    return __notowords(num,string).strip()

print(numberToWords(100000))