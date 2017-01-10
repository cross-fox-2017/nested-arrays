var table =
[
["Number","Name","Position","Points per Game"],
[12,`Joes Schmo`,'Center',[14,32,7,0,23]],
[9,'Ken Buckets','Point Guard',[19,0,11,22,0]],
[31,'Harvey Kay','Shooting Guard',[0,30,16,0,25]],
[18,'Sally Talls','Power Forward',[18,29,26,31,19]],
[22,'Mo DiBoux','Small Forward',[11,0,23,17,0]]
];

function addData(n){

if(n === undefined){
  return table;
}else{
table.push(n);
return table;}

}


let data = ["1","John Doe","Director",[10,10,10,10]];
addData(data);
console.log(table[3][2] == "Shooting Guard")
console.log(JSON.stringify(table[1][3]) == JSON.stringify([14,32,7,0,23]))
