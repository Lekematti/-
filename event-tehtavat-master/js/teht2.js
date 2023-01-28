//teht2.html (4p)
//Dokumentti sisältää <img> ja <p> elementit.
// Tee CSS joka piilottaa <p> elementin ja skripti + CSS, joka näyttää <p> elementin,
// kun hiiri liikutetaan <img> elementin päälle (mouseenter) ja piilottaa <p> elementin,
// kun hiiri poistuu <img> elementin päältä (mouseleave).

const kuva = document.querySelector('img');
const kappale = document.querySelector('p');


kuva.addEventListener('mouseenter',function (evt){
    kappale.style.visibility = 'visible';
})

kuva.addEventListener("mouseleave", function (evt){
    kappale.style.visibility = 'hidden';
})
