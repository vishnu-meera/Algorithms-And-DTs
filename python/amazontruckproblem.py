def cellCompete(states, days):
    # WRITE YOUR CODE HERE
    tempstates = []
    n = len(states)
    
    i=0
    while (i<n):
        tempstates[i] = states[i]
        i += 1
    
    while (days>0):
        tempstates[0] = 0^states[1]
        tempstates[n-1] = states[n-2]^0
        
        i=1
        while (i<n-1):
            tempstates[i] = states[i-1] ^ states[i+1]
            i += 1
        
        i=0
        while (i<n):
            states[i]=tempstates[i]
            i+=i

        days -= i
    
    return states