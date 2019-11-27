/**
* @Author: gyanl
* @Date:   2017-10-01T09:56:56+05:30
* @Last modified by:   saxten2011
* @Last modified time: 2017-10-01T20:00:14+05:30
*/

var titleFont = "";
var titleFontLink ="";
var bodyFont = "";
var bodyFontLink = "";
var bgColor = "";

var mytitle = document.getElementById("title-text");
var mybody = document.getElementById("body-text");
var fonts = [
  "ABeeZee",
  "Abel",
  "Alfa Slab One",
  "Amaranth",
  "Anonymous Pro",
  "Arimo",
  "Barlow",
  "BioRhyme",
  "Bitter",
  "Cabin",
  "Cardo",
  "Chivo",
  "Crete Round",
  "DM Sans",
  "Didact Gothic",
  "Domine",
  "Dosis",
  "EB Garamond",
  "Fira Sans",
  "Francois One",
  "Gentium Book Basic",
  "Grenze",
  "IBM Plex Mono",
  "IBM Plex Serif",
  "Imprima",
  "Inconsolata",
  "Istok Web",
  "Karla",
  "Lato",
  "Libre Baskerville",
  "Libre Franklin",
  "Lora",
  "Magra",
  "Maven Pro",
  "Merriweather",
  "Metrophobic",
  "Montserrat",
  "Muli",
  "Neuton",
  "Overpass",
  "Ovo",
  "Playfair Display",
  "Quando",
  "Questrial",
  "Quicksand",
  "Rokkitt",
  "Rubik",
  "Rufina",
  "Saira",
  "Scope One",
  "Sintony",
  "Slabo 13px",
  "Space Mono",
  "Stint Ultra Expanded",
  "Taviraj",
  "Titillium Web",
  "Ultra",
  "Work Sans"
]

//   "Arimo"
//   "Bentham
//   "Cabin
//   Cabin Condensed
//   Cantora One
//   Simonetta
//   Signika
//   Rosarivo
//   Ropa Sans
//   Rambla
//   Quattrocento Sans
//   Puritan
//   PT Sans
//   Oranienbaum
//   Enriqueta
//   Fanwood Text
//   Goudy Bookletter 1911
//   Headland One
//   IM Fell Great Primer
//   Lora
//   Maven Pro
//   Old Standard TT
//   Nobile
//   Neuton
//   Nanum Gothic
// ];
//
// var titleFonts = [
//   "Astloch",
//   Bentham
//   Bevan
//   Bowlby One
//   Bubbler One
//   Share Tech
//   Share
//   Passero One
//   Francois One
//   Fredoka One
//   GFS Didot
//   Josefin Sans
//   Jura
//   Kelly Slab
//
// ];
//
// var monospaceFonts = [
//   Source Code Pro
//   Lekton
//   Nova Mono
//
// ];
//
// var condensedSans = [
//   Marvel
// ]
//
// var displayFonts = [
//   Kenia
//   Life Savers
//   Julius Sans One
//   Megrim
//   Oldenburg
//   Nova Mono
//   Modern Antiqua
//
// ]

var numFonts = fonts.length;

function genColor() {
    var a = "";
    for (var i = 0; i < 3; i++)
        a = a.concat(Math.floor(Math.random() * 255).toString(16));

    if (a.length < 6) {
        for (var i = 0; i < (6 - a.length); i++)
            a = "0" + a;
    }
    return "#" + a;
}

function randomiseBackground() {
  bgColor = genColor();
  document.body.style.background = bgColor;
}

function updateDescription() {
  document.getElementById("info").innerHTML = "Pairing <a id='titlefontlink' target='_blank' rel='noopener noreferrer'>" + titleFont + "</a> with <a id='bodyfontlink' target='_blank' rel='noopener noreferrer'>" + bodyFont + "</a>. <br>Double click text to change font.";

  titleFontLink = "https://fonts.google.com/specimen/" + titleFont;
  bodyFontLink = "https://fonts.google.com/specimen/" + bodyFont;

  document.getElementById('titlefontlink').setAttribute('href', titleFontLink);
  document.getElementById('bodyfontlink').setAttribute('href', bodyFontLink);

}

function randomiseFont() {
  var numba = Math.floor(Math.random()*numFonts);
  var randomFont = fonts[numba];
  return randomFont;
}


function setTitleFont() {
  titleFont = randomiseFont();
  document.getElementById("title-text").style.fontFamily = titleFont;
  randomiseBackground();
  updateDescription();
}

function setBodyFont() {
  bodyFont = randomiseFont();
  document.getElementById("body-text").style.fontFamily = bodyFont;
  randomiseBackground();
  updateDescription();
}

function switchFonts() {
  var temp = bodyFont;
  bodyFont = titleFont;
  titleFont = temp;
  document.getElementById("body-text").style.fontFamily = bodyFont;
  document.getElementById("title-text").style.fontFamily = titleFont;
  updateDescription();
}

function setTitleAndBody() {
  titleFont = randomiseFont();
  document.getElementById("title-text").style.fontFamily = titleFont;

  bodyFont = randomiseFont();
  document.getElementById("body-text").style.fontFamily = bodyFont;

  updateDescription();
}

function alignLeft() {
  document.getElementById("title-text").style.textAlign = "left";
  document.getElementById("body-text").style.textAlign = "left";
}

function alignCenter() {
  document.getElementById("title-text").style.textAlign = "center";
  document.getElementById("body-text").style.textAlign = "center";
}

function alignRight() {
  document.getElementById("title-text").style.textAlign = "right";
  document.getElementById("body-text").style.textAlign = "right";
}

function textBigger() {
  document.getElementById("title-text").style.fontSize = "2.6em";
  document.getElementById("title-text").style.lineHeight = "1em";
  document.getElementById("body-text").style.fontSize = "1.2em";
  document.getElementById("body-text").style.lineHight = "2.6em";
}

function textSmaller() {
  document.getElementById("title-text").style.fontSize = "1.5em";
  document.getElementById("title-text").style.lineHeight = ".8em";
  document.getElementById("body-text").style.fontSize = ".8em";
  document.getElementById("body-text").style.lineHight = "1em";
}

function init() {
  setTitleFont();
  setBodyFont();
  document.body.style.background = "black";
  updateDescription();

  if (screen.width<540) {
    document.getElementById("body-text").contentEditable = "false";
    document.getElementById("title-text").contentEditable = "false";
  }

}
