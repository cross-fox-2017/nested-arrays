//write your code herefunction chessboard(){
function chessboard(){
    let arrayChessboard = [];
    let j = 8;

    for(var i = 0; i < j; i++){
      var namaCatur = ["Benteng", "Kuda", "Gajah", "Raja", "Ratu", "Gajah", "Kuda","Benteng"];
      var Pion      = "Pion";
      var Empty     = "Empty";

      if(i === 0 || i == 7){
        arrayChessboard.push(namaCatur);
      }
      else if (i == 1 || i == 6){
        arrayChessboard[i] = []
        for(var k = 0; k < j; k++){
          arrayChessboard[i].push(Pion);
        }
      }else{
        arrayChessboard[i] = [];
        for(var l = 0; l < j; l++){
          arrayChessboard[i].push(Empty);
        }

      }

    }
   return arrayChessboard;
}


console.log(chessboard());
