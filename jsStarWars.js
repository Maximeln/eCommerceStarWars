const caseNbAjout = document.querySelectorAll('input.caseNbAjout');
const boutonPlus = document.querySelectorAll('.boutonPlus');
const boutonEnvoiPanier = document.querySelectorAll('.boutonEnvoiPanier');
const suprimer = document.querySelectorAll('.suprimer');

for (let i = 0; i < caseNbAjout.length; i++) {
  suprimer[i].addEventListener('click', function() {
    caseNbAjout[i].value = 0;
  });

  boutonPlus[i].addEventListener('click', function() {
    let value = parseInt(caseNbAjout[i].value);
    caseNbAjout[i].value = value + 1;
  });
}

// https://www.w3schools.com/howto/howto_js_slideshow.asp


// oublie pas les bandes jaunes sur la page de Maxime