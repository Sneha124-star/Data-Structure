var matrixReshape = function(mat, r, c) {
let originalRow =  mat.length;
    let originalCol =  mat[0].length;
    let dataSet = [];
    let res = [];
    if(r *c != originalRow* originalCol) return mat;
    for(let i=0; i<originalRow; i++){
         for(let j=0; j<originalCol; j++){
            dataSet.push(mat[i][j]);
         }
    }
    c = (dataSet.length/r)
    for(let i=0; i<r; i++){
         let row = [];
         for(let j=0; j<c; j++){
            row.push(dataSet.shift());
         }
        res.push(row)
    }
    return res;
};
