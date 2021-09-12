var intersect = function(nums1, nums2) {
    var narr=new Array();
    const val=[];
    if(nums1.length===0 || nums2.length===0){
        return [0,0];
    }
    if(nums1.length===nums2.length){
         const filteredArray = nums1.filter(value => nums2.includes(value));
        return filteredArray;

    }
    for(var i=0;i<nums1.length;i++){
        for(var j=0;j<nums2.length;j++){
            if(nums2.length===1){
                if(nums1[i]!==narr[0]){
                     if(nums1[i]===nums2[j]){
                narr.push(nums1[i]);
                break;
            }
            }
            }
            }

        }
 return narr;
};
