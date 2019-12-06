def lengthOfLongestSubstring(s: str) -> int:
    if len(s) == 0:
        return 0
    if len(s) == 1:
        return 1
    st,start,maxLen,_=0,0,0,1
    m = dict()
    m[s[0]] =0
    while _ < len(s):
        if s[_] not in m:
            m[s[_]]=_
        else:
            if m[s[_]] >= st:
                curlen = _ - st
                if curlen>maxLen:
                    maxLen = curlen
                    start = st
                st = m[s[_]] + 1
            m[s[_]]=_
        _+=1
    if _-st>maxLen:
        maxLen = _-st
        start = st
    return maxLen


print(lengthOfLongestSubstring(""))