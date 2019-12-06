def isValid(s):
    stack = list()
    for char in s:
        if char == '(' or char == '{' or char =='[':
            print(char , "push")
            stack.append(char)
        else:
            if char == ')':
                print(char, stack[-1])
                if not stack or stack[-1] != '(':
                    print("here 1")
                    return False
                stack.pop()
            elif char == '}':
                if not stack or stack[-1] != '{':
                    print("here 2")
                    return False
                stack.pop()
            elif char == ']':
                if not stack or stack[-1] != '[':
                    print("here 3")
                    return False
                stack.pop()
    
    if stack:
        print("here 4")
        return False
    else:
        return True

print(isValid("()[]{}"))