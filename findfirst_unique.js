//To find the first unique character in a string
var firstUniqChar = function(s) {
    const characterCount = {}//map function
    //filling the map func
    for(var i=0;i<s.length;i++){
        characterCount[s[i]] = characterCount[s[i]]+1 ||1;
    }
    for(var i=0;i<s.length;i++){
        if(characterCount[s[i]]===1){
            return i;
        }
    }
    return -1;
};
