var table =[];
function addData(data){
  table.push(data);
}

let judul= ['Number','Name','Position','Points per Game']
let data = ['12','Joe Schmo','Center',[10,1,2,2]]
let data2 =['9','Ken Buckets','Point Guard',[19,0,11,22,0]]
addData(judul);
addData(data);
console.log(table[1][1]== 'Joe Schmo');
