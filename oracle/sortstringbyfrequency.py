def frequencySort(s):
    mydict = dict()
    sortedstr = ""
    for char in s:
        if char in mydict:
            mydict[char] += 1
        else:
            mydict[char] = 1
    
    for key ,value in sorted(mydict.items(),key=lambda item:item[1],reverse=True):
        sortedstr = sortedstr + key*value
    return sortedstr

frequencySort("tree")
frequencySort("cccaaa")
frequencySort("Aabb")