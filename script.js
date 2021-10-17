// pirma užduotis

// var kaina = prompt("Kiek kainuoja prekė?");
// console.log(kaina);
// kaina = Number(kaina);
// while (isNaN(kaina) || kaina <= 0){
//   var kaina = prompt("Kiek kainuoja prekė?");
// }
// kaina = Math.round((kaina + Number.EPSILON) * 100) / 100;
// console.log("Prekės kaina su PVM: " + kaina + "€");
// alert("Prekės kaina su PVM: " + kaina + "€");
//
//  var pvm = kaina * 0.21;
//  pvm = Math.round((pvm + Number.EPSILON) * 100) / 100;
//  console.log("PVM: " + pvm + "€");
//  alert("PVM: " + pvm + "€");
//
//  var kaina_be_pvm = kaina - pvm;
//  kaina_be_pvm = Math.round((kaina_be_pvm + Number.EPSILON) * 100) / 100;
//  console.log("Prekės kaina be PVM: " + kaina_be_pvm + "€");
//  alert("Prekės kaina be PVM: " + kaina_be_pvm + "€");


//Antra užduotis

// const heroes = ["", "Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];
// console.log("Pasirinkite savo herojų nuo " + heroes[1] + " iki " + heroes[6]);
// var i = prompt("Pasirinkite skačių nuo 1 iki 6!");
// console.log(i);
//
// if (i == 1){
//   console.log("Jūs pasirinkote - " + heroes[1]);
// } else if (i == 2){
//   console.log("Jūs pasirinkote - " + heroes[2]);
// }else if (i == 3){
//   console.log("Jūs pasirinkote - " + heroes[3]);
// }else if (i == 4){
//   console.log("Jūs pasirinkote - " + heroes[4]);
// }else if (i == 5){
//   console.log("Jūs pasirinkote - " + heroes[5]);
// }else if (i == 6){
//   console.log("Jūs pasirinkote - " + heroes[6]);
// }

//papildoma



var i = 0;     // Loop iterator
var n = prompt("Kiek skaičių sudarys masyvą");
console.log(n);
var userInput; // Input from user
sum = 0; //pradinė vertė
avg = 0; //pradinė vertė
max = 0; //pradinė vertė
min = Infinity; //pradinė vertė

// Collect inputs
for(i=0; i<n; i++)
{   userInput = parseInt(prompt('Įveskite reikšmę nuo '+(i+1)+' iš '+n));
    console.log(userInput);
    sum += userInput;
    avg = sum / n;
    if (max <= userInput ) {
        max = userInput;
    } else if (min >= userInput) {
      min = userInput;
    }
    console.log(min);
    console.log(max);
}

// Output results
console.log('Skaičių suma: '+ sum.toFixed(2));
console.log('Skaičių vidurkis: '+ avg.toFixed(2));
console.log('Didžiausias skaičius: '+ max.toFixed(2));
console.log('Mažiausias skaičius: '+ min.toFixed(2));
alert('Skaičių suma: '+ sum.toFixed(2));
alert('Skaičių vidurkis: '+ avg.toFixed(2));
alert('Didžiausias skaičius: '+ max.toFixed(2));
alert('Mažiausias skaičius: '+ min.toFixed(2));
