//write your code here
var chessboard = [];
var blackboard = ["Benteng1", "Kuda1", "Menteri1", "Raja", "Ratu", "Menteri2", "Kuda2", "Benteng2"];
var whiteboard = ["Benteng1", "Kuda1", "Menteri1", "Ratu", "Raja", "Menteri2", "Kuda2", "Benteng2"];
var prajurit   = [];
var arr = [];

for(let i = 0; i < 8; i++) {
  prajurit.push("Pion")
}

for(var i = 0; i < 8; i++){
  if(i == 0){
    chessboard.push(blackboard)
  }
  if(i == 1 || i == 6){
    chessboard.push(prajurit)
  }
  if(i == 2 || i == 3 || i  == 4 || i == 5){
    chessboard.push(arr)
  }
  if(i == 7){
    chessboard.push(whiteboard)
  }

}
console.log(chessboard)
