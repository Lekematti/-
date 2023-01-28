//teht3.html (4p)
// Tee laskin, jossa on yhteenlasku, vähennys, kerto- ja jakolasku.
// teht3.html sisältää kaksi tekstikenttää, joihin syötetään numerot,
// jotka lasketaan yhteen, vähennetään, kerrotaan tai jaetaan,
// riippuen siitä mitä nappia käyttäjä painaa. Vastaus tulostetaan <p id="vastaus"> elementin sisälle. Jotta luvuilla voidaan laskea,
// tekstikenttien arvot pitää muuttaa numeroiksi unaarisella operaattorilla tai esim. parseFloat -funktiolla,
// koska tekstikenttien tyyppi on merkkijono. Tekstikenttien sisällön voi lukea value -attribuutilla (element.value).
// Jos haluat haastetta, vaihda nappien tilalle alasvetovalikko, josta valitaan laskun tyyppi. + 2p
// Tai vielä haasteellisemmasa versiossa tee vain yksi tekstikenttä, johon kirjoitat laskun.
// Tässä voit käyttää apuna esim includes ja split -metodeja sekä switch -lausetta + 4p

'use strict'

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let pluslasku = document.getElementById('sum');
let minuslasku = document.getElementById('sub');
let jakolasku = document.getElementById('div');
let kertolasku = document.getElementById('multi');
let tulos = document.getElementById('vastaus');


pluslasku.addEventListener('click', plus);
minuslasku.addEventListener('click', minus);
jakolasku.addEventListener('click', jako);
kertolasku.addEventListener('click', kerto);


function plus(){
  let sum = (parseFloat(num1.value) + parseFloat(num2.value));
    tulos.innerText = "vastaus: "+ sum;
}

function minus(){
 let  ero = (parseFloat(num1.value) - parseFloat(num2.value));
    tulos.innerText = "vastaus: "+ ero;
}

function jako(){
  let jak = (parseFloat(num1.value) / parseFloat(num2.value));
    tulos.innerText = "vastaus: "+ jak;
}

function kerto() {
   let kert = (parseFloat(num1.value) * parseFloat(num2.value));
    tulos.innerText = "vastaus: "+ kert;
}
