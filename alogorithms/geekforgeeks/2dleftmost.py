# The solution starts here

a = [[0, 0, 1, 1], [0, 0], [0, 0, 1]]
def leftmost(a):
    for i in range(len(a)):
        for j in range(len(a[i])):
            if a[i][j] == 1:
                return (i,j)
    return -1
print(leftmost(a))

# This is of O(n) complexity, since we only doing one operation in every element.
# The solution ends here