//write your code here
let chess = ["blackPawn","blackKnight","blackBishop","blackRook","blackQueen","blackKing","whitePawn","whiteKnight","whiteBishop","whiteBishop","whiteQueen","whiteKing"];
let chessBoard = [];




for(let i=0; i<8;i++){
var count = 9;

  for(let j=0; j<8;j++){
  //  while(count > 0 ){
      if((i === 0 || i=== 7 )&& (j === 0 || j === 7 ){
        chessBoard.push("blackRook");

      }else if((i === 0 || i=== 7 )&& (j === 1 || j === 6 ){
        chessBoard.push("blackKnight");

      }else if((i === 0 || i=== 7 )&& (j === 2 || j === 5 ){
        chessBoard.push("blackBishop");

      }else if((i === 0 || i=== 7 )&& (j === 4 ){
        chessBoard.push("blackQueen");

      }else if((i === 0 || i=== 7 )&& (j ===3 ){
        chessBoard.push("blackKing");

      }else if((i === 0 || i=== 7 )&& (j === 0 || j === 7 ){
        chessBoard.push("whiteRook");

      }else if((i === 0 || i=== 7 )&& (j === 1 || j === 6 ){
        chessBoard.push("whiteKnight");
      }else if((i === 0 || i=== 7 )&& (j === 0 || j === 5 ){
        chessBoard.push("whiteBishop");
      }else if((i === 0 || i=== 7 )&& (j === 4 ){
        chessBoard.push("whiteQueen");
      }else if((i === 0 || i=== 7 )&& (j === 3){
        chessBoard.push("whiteQueen");
      }
      else if((i === 1 || i=== 6 ){
        chessBoard.push("blackKnight");
      }else if((i === 1 || i=== 6 ){
        chessBoard.push("blackKnight");
      }
    //  count--;
    
  }
}

console.log(chessBoard);
