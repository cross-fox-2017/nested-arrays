//write your code here
function chessboard(a,b) {
    var papan = [],
        karakter_putih = ["Benteng", "kuda", "mentri", "ratu", "raja", "mentri", "kuda", "benteng"],
        karakter_hitam = karakter_putih.slice().reverse(),
        pion_putih = "Pion putih",
        pion_hitam = "Pion hitam",
        area_bebas = "Area bebas, anda berada di koordinat " + "X = "+ a + " Y = " + b;

    // area karakter hitam
    // isi karakter ke dalam papan[0]
    papan.push(karakter_putih);

    // area pion hitam
    papan.push([]); // papan[1]
    // isi pion putih ke dalam papan[1]
    for (var i = 0; i < 8; i++) {
      papan[1].push(pion_putih);
    }

    // area bebas
    for (var x = 1; x <= 4; x++) {
      papan.push([]);
    }

    for (var j = 0; j < 8; j++) {
      papan[2].push(area_bebas);
      papan[3].push(area_bebas);
      papan[4].push(area_bebas);
      papan[5].push(area_bebas);
    }

    // area pion hitam
    papan.push([]); // papan[1]
    // isi pion putih ke dalam papan[1]
    for (var i = 0; i < 8; i++) {
    papan[6].push(pion_hitam);
    }

    // area karakter hitam
    papan.push(karakter_hitam);

    return papan[a][b];
}

console.log(chessboard(0,5));

/*
[
  ["Benteng", "kuda", "mentri", "ratu", "raja", "mentri", "kuda", "benteng"],     // daerah hitam
  ["pion", "pion", "pion", "pion","pion", "pion", "pion", "pion"],
  [" ", " ", " ", " ", " ", " ", " ", " ",]
  [" ", " ", " ", " ", " ", " ", " ", " ",]
  [" ", " ", " ", " ", " ", " ", " ", " ",]
  [" ", " ", " ", " ", " ", " ", " ", " ",]
  ["pion", "pion", "pion", "pion","pion", "pion", "pion", "pion"],
  ["Benteng", "kuda", "mentri", "raja", "ratu", "mentri", "kuda", "benteng"]      // daerah putih
]
*/
