/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ').split(" ")
    let wordsDictionary = {}, bannedDictionary = {};
    let max_word_len = 0, max_word = "";
    
    for(const word of banned){
        if(!bannedDictionary[word]){
            bannedDictionary[word] =1;
        }
    }

    for(const word of words){
        if(word.length > 0 && !bannedDictionary[word]){
            if(!wordsDictionary[word]){
                wordsDictionary[word] = 1;
            }else{
                wordsDictionary[word] += 1;
            }
            
            if(max_word_len<wordsDictionary[word]){
                max_word_len = wordsDictionary[word];
                max_word = word;
            }
        }
    }
    console.log(wordsDictionary)
    return max_word
};