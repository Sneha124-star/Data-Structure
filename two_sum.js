var twoSum = function(nums, target) {
    var num;
    var n=nums.length;
    for(var i=0;i<n;i++){
        for(var j=1;j<=n-1;j++){
            if(j===i){
                break;
            }
            num= nums[j]+nums[i];
            if(num===target){
                var p=[i,j]
                return p;
            }
        }
        j=i;           
    }

};
