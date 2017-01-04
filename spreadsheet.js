//write your code here
let isiTable   = [];
let dataHeader = ["Number", "Name", "Position", "Points per Game"];
let dataJoe    = ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];
let dataKen    = ["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]];
let dataHarvey = ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]];
let dataSally  = ["18", "Sally Talls", "Power Forward", [18, 29, 26, 31, 19]];
let dataMo     = ["22", "Mo DiBoux", "Small Forward", [11, 0, 24, 17, 0]];

function addData(data){
  isiTable.push(data);
}

addData(dataHeader);
addData(dataJoe);
addData(dataKen);
addData(dataHarvey);
addData(dataSally);
addData(dataMo);

console.log(isiTable[3][2] == "Shooting Guard");
