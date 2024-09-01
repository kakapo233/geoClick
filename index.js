/* clicker game*/
/* PT102 */
/* Seamus Geoghegan */
var currencyCount=0;
var shapeValue=[3,4,5,6,7,8,9,10];
var baseShapeCost=[20,300,5000,70000,110000,1300000,23000];
var shapeCostMultiplyer=1.15;
var numOfTri=0;
var numOfSqu=0;
var numOfPen=0;
var numOfHex=0;
var numOfsep=0;
var numOfOct=0;

var idOfTri=0;
var idOfSqu=1;
var idOfPen=2;
var idOfHex=3;
var idOfsep=4;
var idOfOct=5;

var valOfTri=3;
var valOfSqu=4;
var valOfPen=5;
var valOfHex=6;
var valOfSep=7;
var valOfOct=8;

function buyTri(){
    document.getElementById("triBut").innerHTML = "triangle<br/>⌬"+String(baseShapeCost[0]);
    currencyCount-baseShapeCost[0];
}
function buySqu(){
    document.getElementById("squBut").innerHTML = "square<br/>⌬"+String(baseShapeCost[1]);
    currencyCount-baseShapeCost[1];
}
function buyPen(){
    document.getElementById("penBut").innerHTML = "pentagon<br/>⌬"+String(baseShapeCost[2]);
    currencyCount-baseShapeCost[2];
}
function buyHex(){
    document.getElementById("hexBut").innerHTML = "hexagon<br/>⌬"+String(baseShapeCost[3]);
    currencyCount-baseShapeCost[3];
}
function buySep(){
    document.getElementById("sepBut").innerHTML = "septagon<br/>⌬"+String(baseShapeCost[4]);
    currencyCount-baseShapeCost[4];
}
function buyOct(){
     document.getElementById("octBut").innerHTML = "octagon<br/>⌬"+String(baseShapeCost[5]);
     currencyCount-baseShapeCost[5];
}
function buy_Auto_Mine(){
    document.getElementById("autoMineBut").innerHTML = "auto mine<br/>⌬"+String(baseShapeCost[6]);
    currencyCount-baseShapeCost[6];
}

buyTri();
buySqu();
buyPen();
buyHex();
buySep();
buyOct();
buy_Auto_Mine();

function triClick(){
    currencyCount= currencyCount+valOfTri;
}
function squClick(){
    currencyCount= currencyCount+valOfSqu;
}
function penClick(){
    currencyCount= currencyCount+valOfPen;
}
function hexClick(){
    currencyCount= currencyCount+valOfHex;
}
function sepClick(){
    currencyCount= currencyCount+valOfSep;
}
function octClick(){
    currencyCount= currencyCount+valOfOct;
}