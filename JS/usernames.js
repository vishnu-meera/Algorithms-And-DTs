

function usernamesSystem(u) {
    // Write your code here
    const usernames = {};
    const ret = [];
    u.forEach(element => {
        if(element in usernames){
            ret.push(element+usernames[element])
            usernames[element]++
        }
        else{
            usernames[element] = 1;
            ret.push(element)
        }
    });
    return ret
}


console.log(usernamesSystem(["alex",
    "xylos",
    "alex",
    "alan"]))