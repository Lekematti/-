
//teht1.html (2p)
//Dokumentti sisältää <button> elementin.
// Tee skripti, joka avaa ponnahdusikkunan, jossa lukee 'Nappia klikattu', kun <button> elementtiä klikataan
    const nappi = document.querySelector('button');

    function A(evt){
    alert('nappia klikattu');
    nappi.removeEventListener('click', A);
    nappi.addEventListener('click', B);
}

    function B(evt){
    alert('klikkasit nappia uudestaan');
}

    nappi.addEventListener('click', A);



