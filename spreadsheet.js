//write your code here
let dataTable = [];

function addData(data){
  dataTable.push(data);
}

let data = ['1','John Doe','Director', [10,10,10,1,0]];
addData(data)
data = ['12','Akbar','Developer', [10,1,12,1,0]];
addData(data)

console.log(dataTable);
