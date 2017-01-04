//write your code here
"use strict"

let kerajaanHitam = ["Benteng Hitam","Kuda Hitam","Luncur Hitam","Ratu Hitam","Raja Hitam","Luncur Hitam","Kuda Hitam","Benteng Hitam"];
let pionHitam = "Pion Hitam";
let kerajaanPutih = ["Benteng Putih","Kuda Putih","Luncur Putih","Ratu Putih","Raja Putih","Luncur Putih","Kuda Putih","Benteng Putih"];
let pionPutih = "Pion Putih";
let kosong = "kosong";
let chessBoard = [];

chessBoard.push(kerajaanHitam)
for (let i = 0; i < 6; i++) {
  chessBoard.push([])
}
for (let j = 0; j < 8; j++) {
  chessBoard[1].push(pionHitam);
  chessBoard[2].push(kosong);
  chessBoard[3].push(kosong);
  chessBoard[4].push(kosong);
  chessBoard[5].push(kosong);
  chessBoard[6].push(pionPutih);
}

chessBoard.push(kerajaanPutih)

console.log(chessBoard)
