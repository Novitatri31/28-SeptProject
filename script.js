// Belajar javascript dasar skysen solution

// a. Tipe data primitif terdiri dari 7 yaitu:
// 1. undefined;
// 2. null;
// 3. boolean;
// 4. strings;
// 5. number;
// 6. bigInt (jarang dipakai);
// 7. symbols (jarang dipakai);


// Berikut adalah truth tabel dari perbandingan AND, OR, Not
// > AND && (ampersand)
// T = T maka hasilnya T;
// F = T maka hasilnya F;
// T = F maka hasilnya F;
// F = F maka hasilnya F;

// > OR || (pipe symbols)
// T=T maka hasilnya T;
// T=F maka hasilnya T;
// F=T maka hasilnya T;
// F=F maka hasilnya F;

// > NOT !x 
// T maka hasilnya F;
// F maka hasilnya T;

// if (kondisi){
//     aksi
// }
// else {
//     aksi
// }
// sedangkan else if ()digunakan apabila ada kondisi lebih dari 1,
// dan diakhiri dengan else. Untuk penggunaan else if dapat digunakan
// beberapa kali tanpa ada batasan.


// contoh penggunaan if else apabila ada 2 kondisi yang berhubungan;
// dalam kasus ini yang dimaksud berhubungan adalah;
// rentan usia 15 - 65 adalah usia produktif oleh karena itu;
// diperlukan tanda penghubung &&
let age = prompt("Masukkan umur anda");
// if (age >= 15 && age < 65){
//     console.log( age + " Adalah usia produktif");
// }
// else {
//     console.log( age + " Adalah usia tidak produktif");
// }

// apabila terjadi 2 kondisi atau lebih yang tidak berhubungan;
// maka diperlukan else if() sebagai contoh;
// if (age < 15) {
//     console.log( age + " Usia anda masih belum cukup umur")
// }
// else if (age >= 15 && age < 65 ) {
//     console.log( age + " usia anda termasuk usia produktif")
// }
// else {
//     console.log( age + " usia anda adalah usia non produktif" )
// }

