def myAtoi(s: str) -> int:
    s,retS = s.strip(),""
    negative = False
    if len(s) == 0:
        return 0

    firstChar = ord(s[0])
    if (firstChar > 58 or firstChar < 48):
        if firstChar != 45 and firstChar != 43:
            return 0

    for i in range(len(s)):
        asci = ord(s[i])
        if (asci== 45) and i==0:
            negative = True
            continue
        if (asci==43) and i==0:
            continue
        if asci > 58 or asci < 48:
            break
        retS += s[i]

    if len(retS) > 0:
        if negative:
            retS = -1 * int(retS)
            if retS <= -2147483648:
                return -2147483648
            return retS
        else:
            retS = int(retS)
            if retS >= 2147483647:
                return 2147483647
            return retS   
    else:
        return 0

print(myAtoi("4193"))
print(myAtoi("-42"))
print(myAtoi("4193 with words"))
print(myAtoi("words and 987"))
print(myAtoi("-91283472332"))
print(myAtoi("91283472332"))
print(myAtoi("+1"))