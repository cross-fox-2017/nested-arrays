//write your code here
var mainTable = [];
var data = [
   ["Number",'Name','Position','Points Per Game'],
   [12,"Joe Schmo","Center",[14,32,7,0,23]],
 [9,"Ken Buckets",'Point Guard',[19,0,11,22,0]],
 [31,'Harvey Kay','Shooting Guard',[0,30,16,0,25]],
[18,'Sally Talls','Power Forward',[0,30,16,0,25]],
[22,'Mo Diboux','Small Forward',[0,30,16,0,25]] ]

function addData(data){

      mainTable.push(data);
}

for(var count = 0;count < data.length; count++){
  addData(data[count]);
}


console.log(mainTable[3][2] == "Shooting Guard");
console.log(JSON.stringify(mainTable[1][3]) == JSON.stringify([14,32,7,0,23]));
