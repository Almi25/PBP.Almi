const tambah = require('./math');
const capitalize = require('./stringUtils');
const getTanggalSekarang = require('./dateUtils');
const tulisFile = require('./fileHandler');

console.log("Hasil Penjumlahan:", tambah(10, 4));
console.log("Kata Kapital:", capitalize("modul node.js"));
console.log("Tanggal Hari Ini:", getTanggalSekarang());
console.log(tulisFile('output.txt', 'Halo dari Node.js modular!'));
