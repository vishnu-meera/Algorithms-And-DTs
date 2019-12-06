// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const m = Math.max(...A);
    if(A.length === 0)
        return 1;
    if(m<1) 
        return 1;
    if(A.length === 1){
        if(A[0]===1)
            return 2;
        else
            return 1;
    }
    const l = [];
    for(let i=0;i<m;i++){
        l[i]=0;
    }
    let i =0;
    for (i = 0; i < A.Length; i++) { 
        if (A[i] > 0) { 
            if (l[A[i] - 1] != 1) { 
                l[A[i] - 1] = 1; 
            } 
        } 
    } 
    for (i = 0; i < l.Length; i++) { 
        if (l[i] == 0) { 
            return i + 1; 
        } 
    } 
  
    return i+2;
}

console.log(solution([1, 3, 6, 4, 1, 2]))