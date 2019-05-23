var getButton = document.querySelector("button.perspective");
var getMain = document.querySelector("main");
var getH1 = document.querySelector("h1");
var getGrid = document.querySelector(".grid");
var getBovenkant = document.querySelector(".bovenkant");
var getBinnenkant = document.querySelector(".binnenkant");
var getBinnenkant2 = document.querySelector(".binnenkant-2");
var getOnderkant = document.querySelector(".onderkant");
var getRug = document.querySelector(".rug");
var getTheme = document.querySelector(".theme");
var getCijfer = document.querySelectorAll(".cijfer .a, .cijfer .b");
var getSchets = document.querySelectorAll(".schets .a, .schets .b");
var getNotities = document.querySelectorAll(".notities .a, .notities .b");
var getContainer = document.querySelector(".checkmark");
var getCard = document.querySelectorAll(".card");
var getCardInput = document.querySelectorAll(".grid .container input");
var getCardSchets = document.querySelectorAll(".card .schets");

var white = "ffffff";
var offwhite = "e3dccf";
var red = "#d62019";
var blue = "#7bccdf";
var orange = "#ea5103";
var blueprint = "#0e3587";

var theme = 1;
var card = 0;
var themeColor = red;
var strokeColor = offwhite;

function perspective() {
    getButton.classList.toggle("active");
    getMain.classList.toggle("main-animated");
    getBovenkant.classList.toggle("bovenkant-animated");
    getBinnenkant.classList.toggle("binnenkant-animated");
    getBinnenkant2.classList.toggle("binnenkant-2-animated");
    getOnderkant.classList.toggle("onderkant-animated");
    getRug.classList.toggle("rug-animated");
    getTheme.classList.toggle("theme-animated");
    
    for (var i=0; i < getCard.length; i++) {
        getCard[i].classList.toggle("card-animated");
    }
    
}

function checkButton() {
    if (getButton.classList.contains("active")) {
    getButton.innerHTML = "2D";
    }
    else {
        getButton.innerHTML = "3D";
    }
}

function themeRed() {
    themeColor = red;
    strokeColor = offwhite;
    theme = 1;

    getH1.style.color = "";
    getMain.style.backgroundColor = themeColor;
    getBovenkant.style.backgroundColor = themeColor;
    getOnderkant.style.backgroundColor = themeColor;
    getRug.style.backgroundColor = themeColor;
    for(var i=0; i < getSchets.length; i++) {
        getSchets[i].style.stroke = offwhite;
    }
    for(var j=0; j < getCijfer.length; j++) {
        getCijfer[j].style.fill = offwhite;
    }
    for(var k=0; k < getNotities.length; k++) {
        getNotities[k].style.stroke = offwhite;
    }
}

function themeBlue() {
    themeColor = blue;
    strokeColor = orange;
    theme = 2;

    getH1.style.color = "";
    getMain.style.backgroundColor = themeColor;
    getBovenkant.style.backgroundColor = themeColor;
    getOnderkant.style.backgroundColor = themeColor;
    getRug.style.backgroundColor = themeColor;
    for(var i=0; i < getSchets.length; i++) {
        getSchets[i].style.stroke = strokeColor;
    }
    for(var j=0; j < getCijfer.length; j++) {
        getCijfer[j].style.fill = strokeColor;
    }
    for(var k=0; k < getNotities.length; k++) {
        getNotities[k].style.stroke = strokeColor;
    }
}

function themeOrange() {
    themeColor = orange;
    strokeColor = offwhite;
    theme = 3;

    getH1.style.color = "";
    getMain.style.backgroundColor = themeColor;
    getBovenkant.style.backgroundColor = themeColor;
    getOnderkant.style.backgroundColor = themeColor;
    getRug.style.backgroundColor = themeColor;
    for(var i=0; i < getSchets.length; i++) {
        getSchets[i].style.stroke = strokeColor;
    }
    for(var j=0; j < getCijfer.length; j++) {
        getCijfer[j].style.fill = strokeColor;
    }
    for(var k=0; k < getNotities.length; k++) {
        getNotities[k].style.stroke = strokeColor;
    }
}

function themeBlueprint() {
    themeColor = blueprint;
    strokeColor = white;
    theme = 4;

    getH1.style.color = "white";
    getMain.style.backgroundColor = themeColor;
    getBovenkant.style.backgroundColor = themeColor;
    getOnderkant.style.backgroundColor = themeColor;
    getRug.style.backgroundColor = themeColor;
    for(var i=0; i < getSchets.length; i++) {
        getSchets[i].style.stroke = strokeColor;
    }
    for(var j=0; j < getCijfer.length; j++) {
        getCijfer[j].style.fill = strokeColor;
    }
    for(var k=0; k < getNotities.length; k++) {
        getNotities[k].style.stroke = strokeColor;
    }
}

function changeColor() {
    if (document.getElementById("red").checked) {
        themeRed();
    }
    else if (document.getElementById("blue").checked) {
        themeBlue();
    }
    else if (document.getElementById("orange").checked) {
        themeOrange();
    }
    else if (document.getElementById("blueprint").checked) {
        themeBlueprint();
    }
}

function toggleColor() {
    if (theme == 1) {
        document.getElementById("red").checked = true;
        changeColor();
    }
    else if (theme == 2) {
        document.getElementById("blue").checked = true;
        changeColor();
    }
    else if (theme == 3) {
        document.getElementById("orange").checked = true;
        changeColor();
    }
    else if (theme == 4) {
        document.getElementById("blueprint").checked = true;
        changeColor();
    }
}

function toggleCard() {
    if (card == 0) {
        document.getElementById("schets-1").checked = false;
        document.getElementById("schets-2").checked = false;
        document.getElementById("schets-3").checked = false;
        document.getElementById("schets-4").checked = false;
        cardColor();
    }
    else if (card == 1) {
        document.getElementById("schets-1").checked = true;
        document.getElementById("schets-2").checked = false;
        document.getElementById("schets-3").checked = false;
        document.getElementById("schets-4").checked = false;
        cardColor();
    }
    else if (card == 2) {
        document.getElementById("schets-1").checked = false;
        document.getElementById("schets-2").checked = true;
        document.getElementById("schets-3").checked = false;
        document.getElementById("schets-4").checked = false;
        cardColor();
    }
    else if (card == 3) {
        document.getElementById("schets-1").checked = false;
        document.getElementById("schets-2").checked = false;
        document.getElementById("schets-3").checked = true;
        document.getElementById("schets-4").checked = false;
        cardColor();
    }
    else if (card == 4) {
        document.getElementById("schets-1").checked = false;
        document.getElementById("schets-2").checked = false;
        document.getElementById("schets-3").checked = false;
        document.getElementById("schets-4").checked = true;
        cardColor();
    }
}

function cardColor() {
    for(var l=0; l < getCard.length; l++) {
        if(getCardInput[l].checked == true) {
            getCardSchets[l].style.backgroundColor = themeColor;
        } else {
            getCardSchets[l].style.backgroundColor = "transparent";
        }
    }
}

//Remove default space
window.onkeydown = function(e) { 
  return !(e.keyCode == 32);
};

//Key space
window.addEventListener("keydown", function(x) {
    if (x.keyCode == "32") {
        perspective();
        checkButton();
    }
});

// Key right
window.addEventListener("keydown", function(x) {
    if (x.keyCode == "39") {
        theme++;
        if (theme == 5) {
            theme = 1;
        }
        toggleColor();
        cardColor();
    }
});

//Key left
window.addEventListener("keydown", function(x) {
    if (x.keyCode == "37") {
        theme--;
        if (theme == 0) {
            theme = 4;
        }
        toggleColor();
        cardColor();
    }
});

//Key down
window.addEventListener("keydown", function(x) {
    if (x.keyCode == "40") {
        card++;
        if (card == 5) {
            card = 0;
        }
        toggleCard();
    }
});

//Key up
window.addEventListener("keydown", function(x) {
    if (x.keyCode == "38") {
        card--;
        if (card == -1) {
            card = 4;
        }
        toggleCard();
    }
});

getButton.addEventListener("click", function() {
    perspective();
    checkButton();
});

getTheme.addEventListener("click", function() {
    changeColor();
    cardColor();
});

getGrid.addEventListener("click", function() {
    cardColor();
    checkCard();
    toggleCard();
});