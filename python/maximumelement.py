# Enter your code here. Read input from STDIN. Print output to STDOUT

if __name__ == '__main__':
    stack = list()
    largestStack = list()
    N = int(input())

    for i in range(N):
        unknown = input().rstrip().split()
        command = int(unknown[0])

        if command==1:
            no = int(unknown[1])
            stack.append(no)
            if not largestStack or no >= largestStack[-1]:
                largestStack.append(no)
        elif command==2:
            if stack:
                no = stack.pop()
                if largestStack and no == largestStack[-1]:
                    largestStack.pop()
        elif command==3:
            if largestStack:
                print(largestStack[-1])