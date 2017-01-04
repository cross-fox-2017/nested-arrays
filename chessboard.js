//write your code here
"use strict"

let kerajaanHitam = ["Benteng Hitam","Kuda Hitam","Luncur Hitam","Ratu Hitam","Raja Hitam","Luncur Hitam","Kuda Hitam","Benteng Hitam"];
let pionHitam = "Pion Hitam";
let kerajaanPutih = ["Benteng Putih","Kuda Putih","Luncur Putih","Ratu Putih","Raja Putih","Luncur Putih","Kuda Putih","Benteng Putih"];
let pionPutih = "Pion Putih";
let kosong = "kosong";
let chessBoard = [];

for (let i = 0; i < 8; i++) {
  chessBoard.push([]);
}

for (let i = 0; i < 8; i++) {
  chessBoard[0].push(kerajaanHitam[i]);
  chessBoard[1].push(pionHitam);
  chessBoard[2].push(kosong);
  chessBoard[3].push(kosong);
  chessBoard[4].push(kosong);
  chessBoard[5].push(kosong);
  chessBoard[6].push(pionPutih);
  chessBoard[7].push(kerajaanPutih[i]);
}

console.log(chessBoard)
