//write your code here
let arrChessBoard = [];
let warna = [' Hitam',' Putih'];
let bidak = ['Benteng','Kuda','Gajah','Raja','Ratu','Gajah','Kuda','Benteng'];

for(let i = 0; i < 8; i++){
  let arr = [];
  arrChessBoard.push(arr);
}

while(arrChessBoard[1].length < 8){
  arrChessBoard[1].push('Pion Hitam');
}

while(arrChessBoard[6].length < 8){
  arrChessBoard[6].push('Pion Putih');
}

for(let i = 2; i < 6; i++){
  while(arrChessBoard[i].length < 8){
    arrChessBoard[i].push('');
  }
}

for(let i = 0; i < 8; i++){
  arrChessBoard[7][i] = bidak[i] + warna[1];
}

for(let i = 0; i < 8; i++){
  arrChessBoard[0][i] = bidak[i] + warna[0];
}

console.log(arrChessBoard);
