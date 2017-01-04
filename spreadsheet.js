//write your code here
var table = [
  ['Number',' Name','Position','Points per Game'],
  ['12','Joe Schmo','Center','[14,32,7,0,23]'],
  ['9', 'Ken Buckets','Point Guard','[0,30,16,0,25]'],
  ['31','Harvey Kay','Shooting Guard','[0,30,16,0,25]'],
  ['18','Sally Tally','Power Forward','[18,29,26,31,19]'],
  ['22','Mo DiBoux','Small Forward','[11,0,23,17,0]'],
  ['1','John Doe','Director','[10,10,10,10]']
]

function dataTable(input) {
  var temp = []
  for (var i = 0; i < input.length; i++) {
    temp.push(input[i])
  }
  // console.log(JSON.stringify(temp[1][3]) == JSON.stringify('[14,32,7,0,23]'));
  // return temp[3][2] == 'Shooting Guard'
  return temp
}

console.log(dataTable(table));
