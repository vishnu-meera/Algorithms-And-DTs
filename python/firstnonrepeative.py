def firstnonrepeativecharacterandindex(s):
    charcodebase = ord('a')
    occur = [None]*26
    for char in s:
        if occur[ord(char)-charcodebase] is None:
            occur[ord(char)-charcodebase] = 1
        else:
            occur[ord(char)-charcodebase] += 1
    print(occur)
    for _ in range(len(s)):
        p = ord(s[_])-charcodebase
        print(p,occur[p])
        if occur[p] == 1:
            return (_,s[_])

print(firstnonrepeativecharacterandindex("loveleetcode"))