var chessboard = [];

var catur=['Benteng','kuda','menteri','raja','ratu','menteri','kuda','benteng']

for(var i=0; i<8; i++){
  var h= [ ];
    chessboard.push(h);
}

for(var i=0; i<chessboard.length;i++){
  var d= ' ';
  for(var j=0; j<chessboard.length;j++){

  if(i===0){
  chessboard[i].push(catur[j]+ " hitam");
  }
  else if(i===1){
    chessboard[i].push("pion hitam");
  }
  else if(i===6){
    chessboard[i].push("pion putih");
  }
  else if(i===7){
    chessboard[i].push(catur[j]+" putih");
  }
  else{
    chessboard[i].push(" ");
  }
}
}



console.log(chessboard[5][0]);
