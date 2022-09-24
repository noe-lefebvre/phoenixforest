var checkBoxStyle = document.getElementById("checkBoxStyle");


// ____________________ DECLARATION DES VARIABLES ____________________

var generalBackground = document.getElementById('generalBackground');

// Get the checkbox
var checkBox = document.getElementById("myCheck");

// Get the output text
//var text = document.getElementById("text");

//----  Button
var button = document.getElementById("button");
var petitRond = document.getElementById('petitRond');

//Powered by CMG
var poweredCMG = document.getElementById("poweredCMG");

var liensRecrutement = document.getElementById("liensRecrutement");
//var liensUtiles = document.getElementById("liensUtiles");
var H2 = document.querySelectorAll("h2#H2_JS_Style.block-title");


var svgLinkedin = document.getElementById("svgLinkedin");
var svgFacebook = document.getElementById("svgFacebook");

// ___________________________________________________________________

function turnDark() {
    console.log("\x1b[32m---------- [CONSOLE CMG] ----------\n      \x1b[30mPassage en mode nuit");
    generalBackground.style.backgroundColor = '#0b2425';


    H2[0].style.color = 'white';
    H2[1].style.color = 'white';
    //H2[2].style.color = 'white';
    //H2[3].style.color = 'white';

    
    poweredCMG.style.color = 'white';
    svgLinkedin.style.color = 'white';
    svgFacebook.style.color = 'white';

    //button
    button.style.boxShadow = 'inset 6px 6px 12px #050e0f, inset -6px -6px 12px #153a3d';
    petitRond.style.boxShadow = '-8px -4px 8px 0px #d4d4d43b, 8px 4px 12px 0px #bbbbbb57';
}

function turnLight() {
    console.log("\x1b[32m---------- [CONSOLE CMG] ----------\n      \x1b[34mPassage en mode jour");
    generalBackground.style.backgroundColor = '#F5F5F1';

    H2[0].style.color = '#0b2425';
    H2[1].style.color = '#0b2425';
    //H2[2].style.color = '#0b2425';
    //H2[3].style.color = '#0b2425';

    
    poweredCMG.style.color = 'black';
    svgLinkedin.style.color = '#0b2425';
    svgFacebook.style.color = '#0b2425';

    button.style.boxShadow = '-8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset';
    petitRond.style.boxShadow = '-8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6';
}

// ____________________ HEURE ____________________
//var now = Date();
var ladate = new Date()

//alert("Heure brute : \n" + ladate.getHours() + ":" + ladate.getMinutes() + ":" + ladate.getSeconds());

//document.write(ladate.getHours() + ":" + ladate.getMinutes() + ":" + ladate.getSeconds())
//document.write("<BR>");

//- formatage de l'heure -
var h = ladate.getHours();
if (h < 10) {
    h = "0" + h
}
var m = ladate.getMinutes();
if (m < 10) {
    m = "0" + m
}
var s = ladate.getSeconds();
if (s < 10) {
    s = "0" + s
}

// Testeur de l'heure

if ((ladate.getHours() < 9) || (ladate.getHours() > 19)) {

    checkBox.click()
    //turnDark();
} else {

}
//document.write("Heure formatée : ");
//document.write(h + ":" + m + ":" + s)
//------------ FIN HEURE ------------



// ____________________ Fonction clique ____________________


function cliqueSurLaBox() {

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        //text.style.display = "block";
        //---- ON
        turnDark();

    } else {
        //text.style.display = "none";
        //---- OFF
        turnLight();


    }
}

function share() {
    console.log("Fonction 'Share' lancée");
    if (navigator.share) {
        navigator.share({
          title: 'CMG Links',
          text: 'Partagez ces liens utiles',
          url: 'https://rebrand.ly/cmg',
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
}