// soal pertama
let soalAritmatika = 3/2 * (2 + 10);
console.log(soalAritmatika);
//soal ke 2
let aritmatikaKe2 = 21/2 * (4 + (21 - 1) * 1);
console.log(aritmatikaKe2);

/*soal ke 3
diketahui sebuah deret aritmatika memiliki 203 suku, dengan deret
7 11 15 ... 203 = x
maka nilai x adalah ?*/

let a = 7;
let b = 4;
let Un = 203;

let n = (Un - a + b) / b;
console.log(n)

/*soal ke 4
Pada barisan aritmatika 7, 5, 3, 1, suku ke 20-nya adalah …
*/
let suku1 = 7
let d = -2;
let Sn = 20;

let jawabSoal4 = (suku1 + (Sn - 1) * d);
console.log(jawabSoal4);

/*soal ke 5
Rumus suku ke-n dari barisan 3, –2, –7, –12, … adalah … 
 */

let sukuPertama = 3;
let sukuKedua =  -2;
let beda = sukuPertama - sukuKedua;
console.log("beda = " +  beda);

let jawabSoal5 = sukuPertama + (-5) + 5;
console.log(jawabSoal5)

/* soal ke 6
Pada suatu ruangan rapat, 
disusun kursi dengan baris depan 12 kursi, baris kedua 14 kursi, baris ketiga 16 kursi. 
Maka banyaknya kursi di baris ke 5 adalah … */
let kursiPertama = 12;
let nKursi = 5;
let bedaKursi = 2;

let jawabSoal6 = kursiPertama + (nKursi - 1) * 2;
console.log(jawabSoal6);

/* soal ke 7
Contoh soal barisan aritmatika SMA beserta pembahasannya, 
pada suatu barisan aritmatika 10, 6, 2, -2, -6, -10. Berapakah beda barisan tersebut?
*/

let sukuK1 = 10;
let sukuK2 = 6;
let bedaN = sukuK1 - sukuK2;
console.log(bedaN);

/*soal ke 8
Suku keempat dan kesepuluh dari suatu barisan aritmatika berturut-turut adalah 21 dan 51.
Rumus suku ke-n barisan aritmatika yaitu:
*/
// Known terms
let term4 = 21;
let term10 = 51;

// Persamaan:
// a + 3d = 21
// a + 9d = 51

// Solve for d:
let d1 = (term10 - term4) / (10 - 4);

// Solve for a:
let a1 = term4 - 3 * d;

// Function to calculate the nth term
function nthTerm(n) {
    return a1 + (n - 1) * d1;
}

// Output the formula and example calculation
console.log(`The formula for the nth term is: a_n = ${a1} + (n - 1) * ${d1}`);
console.log(`Example: The 4th term is ${nthTerm(4)}`);
console.log(`Example: The 10th term is ${nthTerm(10)}`);


