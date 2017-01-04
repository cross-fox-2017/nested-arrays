var mainArr = [];
var black = ['Black rook','Black knight','Black Bishop','Black King','Black Queen','Black Bishop','Black Knight','Black Rook'];
var white = ['White rook','White knight','White Bishop','White King','White Queen','White Bishop','White Knight','White Rook'];
var pion = "pion";

for(let i = 0; i < 8;i++){
  var row = [];
  for(let j = 0;j < 8;j++){

    if(i == 0 ){
      row.push(black[j]);
    }
    if(i == 1 || i == 6)
    {
      row.push(pion);
    }

    if(i == 7)
    {
      row.push(white[j]);
    }

  }
  mainArr.push(row)
}//write your code here


console.log(mainArr);
