def numtoword(num):
    numstr = str(num)#"333"
    lenstr = len(numstr)# 3
    strword = " "
    i = 0
    for j in range(lenstr-1,0,-1): # for (var j=lenstr-1 j-- j<=0)
        if i >= 2:
            strword =   getword(numstr[j],0) + getword(numstr[j],i) + " " + strword
        else:
            strword =  getword(numstr[j],i) + " " + strword
        i = i +1
    return strword
        
def getword(digit,position):
    if position==0:
        if(digit == "1"):
            return "one"
        elif(digit == "2"):
            return "two"
        if(digit == "3"):
            return "three"
        if(digit == "9"):
            return "nine"
    if position==1:
        if(digit == "1"):
            return "ten"
        elif(digit == "2"):
            return "twenty"
        if(digit == "3"):
            return "thirty"
        if(digit == "5"):
            return "fifty"
    if position==2:
        return "hundered"
