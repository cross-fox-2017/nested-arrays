//write your code here

var table = [];
var head = ['Number','Name','Position','Points perGame'];
var baris1 = [12,'Joe Schmo','Center'[14, 32, 7 ,0 ,23]];
var baris2 = [9, 'Ken buckets','poin Guard',[19, 0, 11, 22, 0]];
var baris3 = [31, 'Harvey kay','Shooting Guard',[0, 30, 16, 0, 25]];
var baris4 = [18, 'Sally Talls','Power Forward',[18, 29, 26, 31,19]];
var baris5 = [22, 'Mo Diboux','Small Forward',[11, 0, 23, 17, 0]];

function addData(data){
	table.push(data)
}
addData(head);
addData(baris1);
addData(baris2);
addData(baris3);
addData(baris4);
addData(baris5);

console.log(table[3][2] == "Shooting Guard");		
