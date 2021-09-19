var generate = function(numRows) {
      let pt= new Array(numRows);

    for(var i=0;i<numRows;i++){
        let pascal =new Array(i+1);
            pascal[0]=1;
            pascal[pascal.length -1]=1;


        for(var j=1;j<pascal.length-1;j++){
                var row = pt[i-1];
                pascal[j]= row[j] + row[j-1];

            }
        pt[i]= pascal;
        }
    return pt;
    };
