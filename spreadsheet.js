//write your code here

let table = [];
let head  = ["Number", "Name", "Position", "Point per Game"];
let Joe   = [12, "Joe Schmo", "Center", [14,32,7,0,23]];
let Ken   = [9, "Ken Buckets", "Point Guard", [19,0,11,22,0]];
let Harvey= [31, "Harvey Kay", "Shooting Guard", [0,30,16,0,25]];
let Sally = [18, "Sally Talls", "Power Forward",[18,29,26,31,19]];
let Mo    = [22, "Mo Diboux", "Small Forward", [11,0,23,17,0]];

function addData(data){

  table.push(data);

}

addData(head);
addData(Joe);
addData(Ken);
addData(Harvey);
addData(Sally);
addData(Mo);

console.log(table[3][2] == "Shooting Guard");
