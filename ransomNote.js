var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for(var i=0;i<magazine.length;i++){
        if(map.has(magazine[i])){
            map.set(magazine[i],map.get(magazine[i])+1);
        }
        else{
            map.set(magazine[i],1);
        }
    }
    for(var i=0;i<ransomNote.length;i++){
        if(!map.has(ransomNote[i]) || map.get(ransomNote[i])===0){
            return false;
        }
        map.set(ransomNote[i] ,map.get(ransomNote[i])-1)
    }
    return true;
};
