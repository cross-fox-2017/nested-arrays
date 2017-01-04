var header = ['Number', 'Name', 'Position', 'Points per Game']
var data1  = ['1', 'eri', 'penyerang',[14,23,54,12]];
var data2  = ['2', 'radit', 'kiper',[1,2,3,4]];
var hasil  = [];

hasil.push(header);

function addData(data) {
  hasil.push(data);
  return hasil;
}

addData(data1)
addData(data2)

console.log(hasil);
console.log(hasil[2][1] == 'radit'); //true
console.log(JSON.stringify(hasil[2][3]) == JSON.stringify([1,2,3,4])); //true
