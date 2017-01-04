//Release0: chessboard
var catur = ["Benteng","Kuda","Gajah","Raja","Ratu","Gajah","Kuda","Benteng"];
var warna = ["Putih","Hitam"];
var n = 8;
var chessboard = [];

for(var i=0; i<n; i++){
  chessboard.push([]);
}

for(var j=0; j<n; j++){
  chessboard[7].push(`${catur[j]} ${warna[0]}`);
}

for(var j=0; j<n; j++){
  chessboard[0].push(`${catur[j]} ${warna[1]}`);
}

for(var j=0; j<n; j++){
  chessboard[6].push(`Pion ${warna[0]}`);
}

for(var j=0; j<n; j++){
  chessboard[1].push(`Pion ${warna[1]}`);
}
for(var i=2; i<6; i++){
  for(var j=0; j<n; j++){
    chessboard[i].push("Kosong");
  }
}

console.log(chessboard[7][0]);
