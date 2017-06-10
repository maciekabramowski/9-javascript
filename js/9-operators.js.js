'use strict';

//dzielenie modulo

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

//skrócony zapis

var licz = 2;
licz += 3;
// licz = licz + 3;

console.log(licz);

//równa wartość i typy danych

var liczba3 = '13', liczba4 = 13;

if (liczba3 === liczba4){
    console.log('równe');
} 

//nierówność

var liczba5 = 5, liczba6 = 13;

while (liczba5 < liczba6){
    console.log(liczba6);
    --liczba6;
} 

// warunek logiczny

var liczba7=5, liczba8=13;

if (liczba7 > 3 && liczba7 < 10) {
    console.log('tak');
}

//skrócony zapis warunku

(2<5) ? console.log('tak') : console.log('nie');

if (2<5){
    console.log('tak');
} else {
    console.log('nie');
}