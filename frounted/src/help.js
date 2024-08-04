let opation = document.querySelector(".opation");
let opationcut = document.querySelector(".opationcut");
let boxa = document.querySelector(".boxa");

// ! quation answ funcation

function answ() {
    if (boxa.style.display === 'none') {
        boxa.style.display = 'flex';
        opation.style.display = 'none'
        opationcut.style.display = 'flex'
        
    } else {
        boxa.style.display = 'none';
    }
}

// ! opation cut  answcut funcation

function answcut() {
    if (boxa.style.display === 'flex') {
        boxa.style.display = 'none';
        opation.style.display = 'flex'
        opationcut.style.display = 'none'
    } else {
        boxa.style.display = 'flex';
    }
}
