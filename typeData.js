console.log("Tutorial Sederhana aja guys")
// const atau construct sama kaya let gk bisa di ubah lagi ketika udah mempunyai value



// var bisa di ubah value nya atau global scope
var myAge = 17;
var myHeight = 1.68;
var myWeight = 65;

var BMI = (myWeight / (myHeight * myHeight));
console.log(BMI);

// let memungkinkan variabel untuk ditetapkan ulang beberapa kali, sedangkan const membuat variabel yang tidak dapat ditetapkan ulang setelah diberi nilai.
let firstNumber;
firstNumber = 20;

let totalNumber = (firstNumber + firstNumber) * 2;
console.log(totalNumber);