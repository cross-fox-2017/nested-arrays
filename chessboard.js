//write your code here
	var chessArr = [];
	var catur = ['benteng','kuda','gajah','raja','ratu','gajah','kuda','benteng'];
	var pion = 'pion';
	var empty = 'empty';
	for (var j = 0; j < 8; j++){
		var tampung = []
		for ( var i = 0; i < 8; i++){
			if(j == 0 ){
				tampung.push(catur[i] + ' Hitam');
			}
			else if( j == 7){
				tampung.push(catur[i] + ' putih');
			}else if( j == 1){
				tampung.push(pion + ' Hitam')
			}else if( j == 6){
				tampung.push(pion + ' Putih');
			}else{
				tampung.push(empty);
			}
	}
	chessArr.push(tampung)
}
console.log(chessArr[7][0])