// Récupération de tous les boutons "+" de la page etc, mais ne marche pas
/*let buttonPlus = document.querySelectorAll('#buttonPlus');
let buttonMoins = document.querySelectorAll('#buttonMoins');
let quantite = document.querySelectorAll('#number');
let subprice = document.querySelectorAll('#subtotal');
let price = document.querySelectorAll('#total');*/

/*ById, qui fonctionne, mais qu'une seule ligne (= solution gardée)
let buttonPlus = document.getElementById("buttonPlus");
let buttonMoins = document.getElementById("buttonMoins");
let quantite = document.getElementById("number");
let subprice = document.getElementById("subtotal");
let price = document.getElementById("total");*/

/* ByClassName qui ne fonctionne pas
let buttonPlus = document.getElementsByClassName("buttonPlus");
let buttonMoins = document.getElementsByClassName("buttonMoins");
let quantite = document.getElementsByClassName("number");
let subprice = document.getElementsByClassName("subtotal");
let price = document.getElementsByClassName("total");*/

/*ByName qui ne fonctionne pas
let buttonPlus = document.getElementsByName("buttonPlus");
let buttonMoins = document.getElementsByName("buttonMoins");
let quantite = document.getElementsByName("quantite");
let subprice = document.getElementsByName("subtotal");
let price = document.getElementsByName("total");*/

// adapte quantité + sous total + prix total 1ère ligne
let buttonPlus = document.getElementById("buttonPlus1");
let buttonMoins = document.getElementById("buttonMoins1");
let quantite = document.getElementById("number1");
let subprice = document.getElementById("subtotal1");
let price = document.getElementById("total");

    function calcul() {
        buttonPlus.onclick = function () {
            let quantiteFinale = parseInt(quantite.value);
            quantiteFinale++;
            quantite.value = quantiteFinale;
            let subpriceFinale = parseInt(subprice.value);
            subpriceFinale += 10;
            subprice.value = subpriceFinale;
            let priceFinale = parseInt(price.value);
            priceFinale = parseInt(subprice.value) + 20;
            price.value = priceFinale;
        };
        buttonMoins.onclick = function () {
            let quantiteFinale = parseInt(quantite.value);
            if (quantite.value > 1) {
                quantiteFinale--;
                quantite.value = quantiteFinale;
                let subpriceFinale = parseInt(subprice.value);
                subpriceFinale -= 10;
                subprice.value = subpriceFinale;
                let priceFinale = parseInt(price.value);
                priceFinale = parseInt(subprice.value) + 20;
                price.value = priceFinale;
            }
            };
    }
        calcul();

// Supprimer ligne par ligne, mais pas d'effet sur le prix total

function removeBloc1() {
    var blocSelect = document.getElementById("ligne1");
    var btn = document.getElementById("deleteButton1");
    btn.onclick = function () {
        blocSelect.remove();
    };
}
removeBloc1();

function removeBloc2() {
    var blocSelect = document.getElementById("ligne2");
    var btn = document.getElementById("deleteButton2");
    btn.onclick = function () {
        blocSelect.remove();
    };
}
removeBloc2();

function removeBloc3() {
    var blocSelect = document.getElementById("ligne3");
    var btn = document.getElementById("deleteButton3");
    btn.onclick = function () {
        blocSelect.remove();
    };
}
removeBloc3();

/*
        // essai Btn supprimer article //
        const deleteItem = document.querySelectorAll(".delete__item");
        deleteItem.forEach((btn, i) => {
            btn.addEventListener('click', e => {
            deleteItemSelect(i);
            });
        });* /


//tentative de regrouper dans if...else, mais le bouton moins ne fonctionne plus :(
    /*function calcul() {
    let quantiteFinale = parseInt(quantite.value);
        if (button1.onclick = function () {
            quantiteFinale++;
            quantite.value = quantiteFinale;
            });
        else if (button2.onclick = function () {
            if (quantite.value > 1) {
                quantiteFinale--;
                quantite.value = quantiteFinale;
            } 
            });
        };

        calcul();*/

//tentative avec ByClassName    
/*function ajouter() {
    let buttonsPlus = document.getElementsByClassName("button.button-plus");
    let quantité = document.getElementsByClassName("span.quantité");
    for (let i = 0; i < buttonsPlus.length; i++) {
        buttonsPlus[i].contentEditable = "true";
    }
}*/


// autre tentative ByClassName
/*
    let buttonsPlus = document.getElementsByClassName('button.button-plus');
    let buttonsMoins = document.getElementsByClassName('button.button-moins');

function ajouter () {
    let quantity = document.getElementsByClassName("span.quantité");
    parseInt(quantity) += 1;
}

    for (let i = 0; i < buttons.length; i++) {
        buttonsPlus[i].onclick = ajouter;
    }*/


// événement appelant la fonction ajouter?
/*    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', ajouter);
    }*/


/*
    // Parcoure les "button-plus" et ajoute une fonction quand on clique?
    buttons.forEach(button => {
        button.addEventListener('click', ajouter);
    });*/