var isValidSudoku = function(board) {
         for (var i=0;i<board.length;i++){
             const set = new Set();
            for(var j=0;j<board[i].length;j++){

                   const cell = board[i][j];
                    if(cell ==='.') continue;
                    if(set.has(cell)) return false;
                    set.add(cell);
                }

            }
         for (var i=0;i<board.length;i++){
             const set = new Set();
            for(var j=0;j<board[i].length;j++){
                   const cell = board[j][i];
                    if(cell ==='.') continue;
                    if(set.has(cell)) return false;
                    set.add(cell);
                }

            }
    for( var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            const set =new Set();

            for( var k=0;k<3;k++){
                for(var l=0;l<3;l++){
                    const cell = board[3*i+k][3*j+l];
                     if(cell ==='.') continue;
                    if(set.has(cell)) return false;
                    set.add(cell);

                }
            }
        }
    }
  return true;
};
