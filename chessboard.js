//write your code here
let chess = ["blackPawn","blackKnight","blackBishop","blackRook","blackQueen","blackKing","whitePawn","whiteKnight","whiteBishop","whiteBishop","whiteQueen","whiteKing"];
let chessBoard = [];

for(let i=0; i<8;i++){
var count =0;
var tempBoard = [];

    while(count<8){
      if(i===0 && (count === 0 || count === 7)){
        tempBoard.push("blackRook");
      }else if(i===0 && (count === 1 || count === 6)){
        tempBoard.push("blackKnight");
      }else if(i===0 && (count === 2 || count === 5)){
        tempBoard.push("blackBishop");
      }else if(i===0 && count === 4){
        tempBoard.push("blackQueen");
      }else if(i===0 && count === 3){
        tempBoard.push("blackKing");

      }else if(i===1 ){
        tempBoard.push("blackPawn");
      }else if(i===6){
        tempBoard.push("whitePawn");

      }else if(i===7 && (count === 0 || count === 7)){
        tempBoard.push("whiteRook");
      }else if(i===7 && (count === 1 || count === 6)){
        tempBoard.push("whiteKnight");
      }else if(i===7 && (count === 2 || count === 5)){
        tempBoard.push("whiteBishop");
      }else if(i===7 && count === 4){
        tempBoard.push("whiteQueen");
      }else if(i===7 && count === 3){
        tempBoard.push("whiteKing");
      }
        else break;
      //console.log(i);
      count++;
    }

  chessBoard.push(tempBoard);
}

console.log(chessBoard);
