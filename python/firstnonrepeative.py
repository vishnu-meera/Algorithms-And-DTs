def firstnonrepeativecharacterandindex(s):
    charcodebase = ord('a')
    occur = [None]*26
    for _ in s:
        p = ord(_)-charcodebase
        if occur[p] is None:
            occur[p] = 1
        else:
            occur[p] += 1
    print(occur)
    for _ in range(len(s)):
        p = ord(s[_])-charcodebase
        if occur[p] == 1:
            return (_,s[_])

print(firstnonrepeativecharacterandindex("loveleetcode"))