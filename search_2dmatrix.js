var searchMatrix = function(matrix, target){
  var count=0;
    for(var i=0;i<matrix.length;i++){
        var arrs =[];
        arrs=matrix[i].sort();
    for(var j=0;j<matrix[i].length;j++){
    if(target===arrs[j]){
        count++;
        return true;
        }
    }
    }
    if(count===0){
        return false;
    }
};
