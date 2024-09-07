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

var valOfShape=[3,4,5,6,7,8]


function currencyDisplay(){
    document.getElementById("currencyCo").innerHTML = "⌬"+String(currencyCount);
    console.log("curDis")
}

function buyTri(){
    document.getElementById("triBut").innerHTML = "triangle<br/>⌬"+String(baseShapeCost[0]);
    console.log("buyTri")
}
function buySqu(){
    document.getElementById("squBut").innerHTML = "square<br/>⌬"+String(baseShapeCost[1]);
}
function buyPen(){
    document.getElementById("penBut").innerHTML = "pentagon<br/>⌬"+String(baseShapeCost[2]);
}
function buyHex(){
    document.getElementById("hexBut").innerHTML = "hexagon<br/>⌬"+String(baseShapeCost[3]);
}
function buySep(){
    document.getElementById("sepBut").innerHTML = "septagon<br/>⌬"+String(baseShapeCost[4]);  
}
function buyOct(){
     document.getElementById("octBut").innerHTML = "octagon<br/>⌬"+String(baseShapeCost[5]);  
}
function buy_Auto_Mine(){
    document.getElementById("autoMineBut").innerHTML = "auto mine<br/>⌬"+String(baseShapeCost[6]);
}

function shopTri(){
    if(currencyCount >= baseShapeCost[0]){
        currencyCount= currencyCount-baseShapeCost[0];
        currencyDisplay();
    }else{alert("you cant afford this")}
}
function shopSqu(){
    if(currencyCount >= baseShapeCost[1]){
        currencyCount= currencyCount-baseShapeCost[1];
        currencyDisplay();
    }else{alert("you cant afford this")}
}
function shopPen(){
    if(currencyCount >= baseShapeCost[2]){
        currencyCount= currencyCount-baseShapeCost[2];
        currencyDisplay();
    }else{alert("you cant afford this")}
}
function shopHex(){
    if(currencyCount >= baseShapeCost[3]){
        currencyCount= currencyCount-baseShapeCost[3];
        currencyDisplay();
    }else{alert("you cant afford this")}
}
function shopSep(){
    if(currencyCount >= baseShapeCost[4]){
        currencyCount= currencyCount-baseShapeCost[4];
        currencyDisplay();
    }else{alert("you cant afford this")}
}
function shopOct(){
    if(currencyCount >= baseShapeCost[5]){
        currencyCount= currencyCount-baseShapeCost[5];
        currencyDisplay();
    }else{alert("you cant afford this")}
}
function shopMine(){
    if(currencyCount >= baseShapeCost[6]){
        currencyCount= currencyCount-baseShapeCost[6];
        currencyDisplay();
    }else{alert("you cant affrd this")}
}

buyTri();
buySqu();
buyPen();
buyHex();
buySep();
buyOct();
buy_Auto_Mine();
currencyDisplay();

const element = document.getElementById("triSVGPos");
element.addEventListener("click", triClick);

function triClick(){
    currencyCount = currencyCount+valOfShape[0];
    currencyDisplay();
    console.log("triClick")
}
function squClick(){
    currencyCount = currencyCount+valOfShape[1];
    currencyDisplay();
}
function penClick(){
    currencyCount = currencyCount+valOfShape[2];
    currencyDisplay();
}
function hexClick(){
    currencyCount = currencyCount+valOfShape[3];
    currencyDisplay();
}
function sepClick(){
    currencyCount = currencyCount+valOfShape[4];
    currencyDisplay();
}
function octClick(){
    currencyCount = currencyCount+valOfShape[5];
    currencyDisplay();
}
