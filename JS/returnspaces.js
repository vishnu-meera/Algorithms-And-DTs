function solution(S, K) {
    let ret_num = 0;
    let index = 0;
    let stack = [];
    while(S.length>0 && S.length<=K){
        if(S[i]===" "){
            if(i===K){
                ret_num+=1;
                S = S.splice(K+1)
            }
        }
    }
    if(S.length>0){
        ret_num+1
    }
    return ret_num
}

solution("SMS messages are really short")