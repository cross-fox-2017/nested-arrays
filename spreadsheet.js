//write your code here
function table(){

	let arr=[];
	let ket=['Number','Name','Position','Point'];
	let numb=[3,5,7,8];
	let name=['Edward Kay','John Doe','Mo Ball','Sir Arthur'];
	let pos=['Center','Point Guard','Shooting Guard','Small Forward'];
	let poin=[[4,8,6],[0,2,5],[7,2,5],[3,8,9,6]];

	for(let i=0; i<name.length; i++){
		arr.push([]);
		arr[i].push(numb[i]);
		arr[i].push(name[i]);
		arr[i].push(pos[i]);
		arr[i].push(poin[i]);
	}
	arr.unshift(ket);

	return arr;
}

var table = table();

function addData(data){
	table.push(data);
}

let data = ['1','Jhon Doeeee','Director',[3,8,9,]];

addData(data);

console.log(table[3][2] == 'Shooting Guard');

console.log(JSON.stringify(table[1][3]) == JSON.stringify([4,8,6]));