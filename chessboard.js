
//write fnyour code here
function chessBoard() {
  let arrTemp       = [];
  let rowColumn     = 8;
  let anakCatur     = ['Benteng', 'Kuda', 'Menteri', 'Raja', 'Ratu', 'Menteri', 'Kuda', 'Benteng']
  let pionCatur     = 'Pion';

  for (let i = 0; i < rowColumn; i++) {
    let arrIndex = [];
     for (var j = 0; j < rowColumn; j++) {
       if (i===0 || i ===7) {
         if (i===0) {
          arrIndex.push(anakCatur[j]+ ' hitam');
         }
         else {
          arrIndex.push(anakCatur[j]+ ' putih');
         }
       }

       else if (i===1 || i===6) {
         if (i===1) {
           arrIndex.push(pionCatur + ' hitam');
         }
         else {
           arrIndex.push(pionCatur+ ' putih');
         }
       }
      }
    arrTemp.push(arrIndex);
  }
  return arrTemp;
}

 console.log(chessBoard()[7][0] == 'Benteng putih'); //true
