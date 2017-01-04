//write your code here
let chessboard = [];

let kingdomPutih = ['benteng putih', 'kuda putih', 'mentri putih', 'ratu putih', 'raja putih', 'mentri putih', 'kuda putih', 'benteng putih'];
let pionPutih = ['pion putih'];
let kingdomHitam = ['benteng hitam', 'kuda hitam', 'mentri hitam', 'ratu hitam', 'raja hitam', 'mentri hitam', 'kuda hitam', 'benteng hitam'];
let pionHitam = ['pion hitam'];
var kosong = 'kosong'

for (var i = 0; i < 8; i++){
	var arr = []
	chessboard.push(arr);

}

for (var i = 0;i < kingdomPutih.length;i++) {
	chessboard[0].push(kingdomHitam[i]);
	chessboard[1].push(pionHitam);
	chessboard[2].push(kosong);
	chessboard[3].push(kosong);
	chessboard[4].push(kosong);
	chessboard[5].push(kosong);
	chessboard[6].push(pionPutih);
	chessboard[7].push(kingdomPutih[i]);

}
console.log(chessboard[7][0]);
