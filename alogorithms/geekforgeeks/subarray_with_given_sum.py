def subarray_with_given_sum(arr,k):
    given_sum = arr[0]
    si = 0
    ei = 1
    while si<=ei:
        if given_sum == k:
            break
        elif given_sum > k:
            given_sum -= arr[si]
            si += 1
        else:
            if ei == len(arr):
                break
            given_sum += arr[ei]
            ei += 1
            
    if given_sum == k:
        return str(si+1) + " " + str(ei)
    else:
        teturn -1


if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        temp = input().rstrip().split()
        N = int(temp[0])
        S = int(temp[1])
        arr = list(map(int, input().rstrip().split()))
        result = subarray_with_given_sum(arr,S)
        print(result)