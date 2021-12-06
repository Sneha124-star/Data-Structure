var isAnagram = function(s, t) {
    const map =new Map();
    var count;

    if(s===t){
        return true;
    }
    if(s.length!== t.length){
        return false;
    }
    for(var i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }
        else{
            map.set(s[i],1);
        }
    }
    for(var i=0;i<t.length;i++){
        if(!map.has(t[i]) || map.get(t[i])===0){
            return false;
        }
        map.set(t[i] ,map.get(t[i])-1)
    }
    return true;

};