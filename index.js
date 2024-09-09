/* clicker game*/
/* PT102 */
/* Seamus Geoghegan */
/* keeps track of how much money the player has */
var currencyCount=0;

/* defines the cost of shapes and miners */
var baseShapeCost=[0,20,300,5000,70000,110000,2300];

/* keeps track of how many autominers you own */
var numOfAM=0;

/* how much auto mine increases currency count per tick */
var level=0;

/* defines the tick length of auto miners */
var timing=0;

/* how much a shape is worth */
var valOfTri=3;
var valOfSqu=4;
var valOfPen=5;
var valOfHex=6;
var valOfSep=7;
var valOfOct=8;

/*updates the amount of money displayed */
function currencyDisplay(){
    document.getElementById("currencyCo").innerHTML = "⌬"+String(currencyCount);
}

/* generates text on shop buttons */
function buyTri(){
    document.getElementById("triBut").innerHTML = "triangle<br/>⌬"+String(baseShapeCost[0]);
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

/* buys shapes and auto miners */
function shopTri(){
    if(currencyCount >= baseShapeCost[0]){
        currencyCount= currencyCount-baseShapeCost[0];
        currencyDisplay();
        level=3;
    }else{alert("you cant afford this")}
}

function shopSqu(){
    if(currencyCount >= baseShapeCost[1]){
        currencyCount= currencyCount-baseShapeCost[1];
        currencyDisplay();
        level=7;
        document.getElementById("squSVGPos").onclick = function(){squClick()};
    }else{alert("you cant afford this")}
}

function shopPen(){
    if(currencyCount >= baseShapeCost[2]){
        currencyCount= currencyCount-baseShapeCost[2];
        currencyDisplay();
        level=12;
        document.getElementById("penSVGPos").onclick = function(){penClick()};
    }else{alert("you cant afford this")}
}

function shopHex(){
    if(currencyCount >= baseShapeCost[3]){
        currencyCount= currencyCount-baseShapeCost[3];
        currencyDisplay();
        level=18;
        document.getElementById("hexSVGPos").onclick = function(){hexClick()};
    }else{alert("you cant afford this")}
}

function shopSep(){
    if(currencyCount >= baseShapeCost[4]){
        currencyCount= currencyCount-baseShapeCost[4];
        currencyDisplay();
        level=25;
        document.getElementById("sepSVGPos").onclick = function(){sepClick()};
    }else{alert("you cant afford this")}
}

function shopOct(){
    if(currencyCount >= baseShapeCost[5]){
        currencyCount= currencyCount-baseShapeCost[5];
        currencyDisplay();
        level=33;
        document.getElementById("octSVGPos").onclick = function(){octClick()};
    }else{alert("you cant afford this")}
}

function shopMine(){
    if(currencyCount >= baseShapeCost[6]){
        currencyCount= currencyCount-baseShapeCost[6];
        currencyDisplay();
        numOfAM = numOfAM+1;
        autoMine();
        console.log("minerbuy")
        console.log(numOfAM)
    }else{alert("you cant afford this")}
}

/* start up */
shopTri();
buyTri();
buySqu();
buyPen();
buyHex();
buySep();
buyOct();
buy_Auto_Mine();
currencyDisplay();

/* runs when you click on a shape */
function triClick(){
    currencyCount = currencyCount+valOfTri;
    currencyDisplay();
}

function squClick(){
    currencyCount = currencyCount+valOfSqu;
    currencyDisplay();
    triClick();
}

function penClick(){
    currencyCount = currencyCount+valOfPen;
    currencyDisplay();
    squClick();
    triClick();
}

function hexClick(){
    currencyCount = currencyCount+valOfHex;
    currencyDisplay();
    penClick();
    squClick();
    triClick();
}

function sepClick(){
    currencyCount = currencyCount+valOfSep;
    currencyDisplay();
    hexClick();
    penClick();
    squClick();
    triClick();
}

function octClick(){
    currencyCount = currencyCount+valOfOct;
    currencyDisplay();
    sepClick();
    hexClick();
    penClick();
    squClick();
    triClick();
}

/* runs the auto mines */
function autoMine(){
    timing=1000/numOfAM;
    setInterval(autoMiner, timing);
    console.log("automine")
}

function autoMiner(){
    currencyCount = currencyCount+level;
    currencyDisplay();
    console.log("AUTOMINER");
}