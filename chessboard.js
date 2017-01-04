//write your code herefunction chessboard(){
function chessboard(){
    let arrayChessboard = [];
    let j = 8;

    for(var i = 0; i < j; i++){
      var namaCatur = ["Benteng", "Kuda", "Gajah", "Raja", "Ratu", "Gajah", "Kuda","Benteng"];
      var Pion      = "Pion";
      var Empty     = "Empty";


      if(i === 0){
        arrayChessboard[i] = []
        for(var o = 0; o < j; o++){
        arrayChessboard[i].push(namaCatur[o] + " Hitam");
        }
      }
      else if(i === 7){
        arrayChessboard[i] = []
        for(var k = 0; k < j; k++){
        arrayChessboard[i].push(namaCatur[k] + " Putih");
        }
      }
      else if (i == 1){
        arrayChessboard[i] = []
        for(var l = 0; l < j; l++){
          arrayChessboard[i].push(Pion + " Hitam");
        }
      }
      else if(i == 6){
        arrayChessboard[i] = []
        for(var m = 0; m < j; m++){
          arrayChessboard[i].push(Pion + " Putih");
        }
      }
      else{
        arrayChessboard[i] = [];
        for(var n = 0; n < j; n++){
          arrayChessboard[i].push(Empty);
        }

      }

    }
   return arrayChessboard;
}


console.log(chessboard());
console.log(chessboard()[7][0] == "Benteng Putih");
