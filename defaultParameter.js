// membuat function calculate dengan parameter nya yaitu tinggi dengan default nya 0, lebar dengan default nya 0 dan panjang dengan default nya 0 
function calculate (tinggi = 0, lebar = 0, panjang = 0){
    // membuat variabel tinggi untuk melakukan input angka yang dimana parseFloat mengubah tipe data string ke dalam bentuk tipe data int
    tinggi = parseFloat(prompt("Masukkan Tinggi Ukuran : "));
    // membuat variabel lebar untuk melakukan input angka yang dimana parseFloat mengubah tipe data string ke dalam bentuk tipe data int
    lebar = parseFloat(prompt("Masukkan Lebar Ukuran : "));
    // membuat variabel panjang untuk melakukan input angka yang dimana parseFloat mengubah tipe data string ke dalam bentuk tipe data int
    panjang = parseFloat(prompt("Masukkan Panjang Ukuran : "));
    // membuat variabel satuan
    satuan = "m/kubik";

    // membuat variabel result untuk melakukan perhitungan arimatika volume balok
    let result = (2 * panjang) + (2 * lebar) + (2 * tinggi);
    // membuat variabel untuk pembuatan tanggal sekarang
    let now = new Date();

    // menampilkan pesan setelah dilakukan operasi aritmatika 
    alert(`Volume Ukuran Benda Tersebut adalah : ${result} ${satuan}` );
    // menampilkan pesan jadwal waktu sekarang
    alert(now);
}
// mengembalikan result calculate
calculate();

function createA(){
    return 10;
}
function add (a = createA(), b = a*4, c = b + 3){
    return a + b + c;
}

console.info(add());  // output : 93, 
// caranya : a = 10; 
//           b = 10 * 4
//             = 40
//           c = 40 + 3
//             = 43
//          jumlahkan : 10 + 40 + 43 = 93

console.info(add(2)); // output : 21
// caranya : a = 2
//           b = 2 * 4
//             = 8
//           c = 8 + 3
//             = 11
//          jumlahkan : 2 + 8 + 11 = 21

console.info(add(3,6));   // output : 18
// caranya : a = 3
//           b = 6
//           c = 6 + 3
//             = 9
//          jumlahkan : 3 + 6 + 9 = 18
console.info(add(5,8,9)); // output : 22
// caranya : a = 5
//           b = 8
//           c = 9
//          jumlahkan : 5 + 8 + 9 = 22