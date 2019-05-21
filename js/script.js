var getButton = document.querySelector("button.perspective");
var getMain = document.querySelector("main");
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

function changeColor() {
    if (document.getElementById("red").checked) {
        themeColor = red;
        strokeColor = offwhite;
        
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
    else if (document.getElementById("blue").checked) {
        themeColor = blue;
        strokeColor = orange;
        
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
    else if (document.getElementById("orange").checked) {
        themeColor = orange;
        strokeColor = offwhite;
        
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
    else if (document.getElementById("blueprint").checked) {
        themeColor = blueprint;
        strokeColor = white;
        
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

window.addEventListener("keypress", function(x) {
    if (x.keyCode == "32")
    perspective();
    checkButton();
});


getButton.addEventListener("click", function() {
    perspective();
    checkButton();
});

getTheme.addEventListener("click", function() {
    changeColor();
    cardColor();
});

getGrid.addEventListener("click", cardColor);