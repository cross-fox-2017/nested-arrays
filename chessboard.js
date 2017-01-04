// var chessBoard =
// [
//   ['BentengHitam','KudaHitam','MentriHitam','RajaHitam','RatuHitam','MentriHitam','KudaHitam','BentengHitam'],
//   ['PionHitam','PionHitam','PionHitam','PionHitam','PionHitam','PionHitam','PionHitam','PionHitam'],
//   [],[],[],[],[],[],[],[],
//   [],[],[],[],[],[],[],[],
//   [],[],[],[],[],[],[],[],
//   [],[],[],[],[],[],[],[],
//   ['BentengPutih','KudaPutih','MentriPutih','RajaPutih','RatuPutih','MentriPutih','KudaPutih','BentengPutih'],
//   ['PionPutih','PionPutih','PionPutih','PionPutih','PionPutih','PionPutih','PionPutih','PionPutih']]
//
// console.log(chessBoard[1][2]);
//
var bidak = ['Benteng','Kuda','Mentri','RajaHitam','Ratu','Mentri','Kuda','Benteng']
var bidak2 = ['pion']

function printBoard() {
  var tampung =[]

  for (var i = 0; i < 8; i++) {
    tampung[i] = []
    for (var j = 0; j < 8; j++) {
      tampung[i][j] = ('*')
    }
  }
  return tampung;
}


function isiBidak() {
  var papan = printBoard()
  for (var i = 0; i < 8; i++) {
    papan[0][i] = bidak[i]
    papan[1][i] = bidak2[0]
    papan[6][i] = bidak2[0]
    papan[7][i] = bidak[i]
  }
  return papan[7][0] == 'Benteng';
}
// console.log(isiBidak());
console.log(isiBidak());
