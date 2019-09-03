/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const occurrences = [];
    const charCodeBase = 'a'.charCodeAt(0);
    
    for(let i=0;i<s.length;i++){
        if (! occurrences[s.charCodeAt(i) - charCodeBase]) 
            occurrences[s.charCodeAt(i) - charCodeBase] = 1;
        else 
            occurrences[s.charCodeAt(i) - charCodeBase]++;
    }

    for (let i = 0; i < s.length; i++){
        let p =  s.charCodeAt(i) - charCodeBase;
        if (occurrences[s.charCodeAt(i) - charCodeBase] === 1) return i;
    }
    
    return -1;
};

	/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dictionary = new Map();
    
    for(let c in s){
        let char = s[c];
        if(dictionary.has(char)) 
            dictionary.set(char, dictionary.get(char)+1);
        else
            dictionary.set(char,1);
    }

    for(let [a,c] of dictionary.entries()){
       if(c===1)
           return s.indexOf(a)
    }
    
    return -1;
};