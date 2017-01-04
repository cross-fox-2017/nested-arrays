//Release1: Spreadsheet
let table = [];

function addData (input) {
	table.push(input);
}

let data1 = ["1", "John Doe", "Director", [10, 10, 10, 10]];
let data2 = ["2", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];
let data3 = ["3", "Ken Buckets", "Point Guard", [9,0,11,2,0]];
let data4 = ["4", "Harvey Kay", "Shooting Guard", [0,30,16,0,25]];
addData(data1);
addData(data2);
addData(data3);
addData(data4);
console.log(table);
console.log(table[3][2] == "Shooting Guard");
console.log(JSON.stringify(table[1][3]) == JSON.stringify([14,32,7,0,23]));
