# Enter your code here. Read input from STDIN. Print output to STDOUT

if __name__ == '__main__':
    stack = list()
    S = ""
    N = int(input())
    for i in range(N):
        unknown = input().rstrip().split()
        command = int(unknown[0])

        if command==1:
            addstring = str(unknown[1])
            S = S + addstring
            stack.append([1,addstring])
            #print(S)
        elif command==2:
            noOfChars = int(unknown[1])
            if len(S) > 0:
                removedstr = S[(-1*noOfChars):]
                S = S[:(-1 * noOfChars)]
                stack.append([2,removedstr])
                #print(S)
        elif command==3:
            kthCharcter = int(unknown[1]) - 1
            if len(S) > 0:
                print(S[kthCharcter])
                #print(S)
        elif command==4:
            if stack:
                topOfStack = stack.pop()
                #print(topOfStack[1])
                if topOfStack[0]==1:
                    noOfChars = len(topOfStack[1])
                    if len(S) > 0:
                        S = S[:(-1 * noOfChars)]
                    #print(S)
                elif topOfStack[0]==2:
                    S = S + topOfStack[1]
                    #print(S)