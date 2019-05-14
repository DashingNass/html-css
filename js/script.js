var getbutton = document.querySelector("button.perspective");
var getmain = document.querySelector("main");
var getbook = document.querySelector(".book");
var getbook2 = document.querySelector(".book2");
var gettheme = document.querySelector(".theme");
var getcijfer = document.querySelectorAll(".cijfer .a, .cijfer .b");
var getschets = document.querySelectorAll(".schets .a, .schets .b");
var getnotities = document.querySelectorAll(".notities .a, .notities .b");

var white = "ffffff";
var offwhite = "e3dccf";
var red = "#d62019";
var blue = "#7bccdf";
var orange = "#ea5103";
var blueprint = "#1445ad";

function perspective() {
    getbutton.classList.toggle("active");
    getmain.classList.toggle("main-animated");
    getbook.classList.toggle("book-animated");
    getbook2.classList.toggle("book2-animated");
    gettheme.classList.toggle("theme-animated");
}

function checkButton() {
    if (getbutton.classList.contains("active")) {
    getbutton.innerHTML = "2D";
    }
    else {
        getbutton.innerHTML = "3D";
    }
}

function changeColor() {
    
//    var color = document.getElementsByName('color');
//    var ischecked_method = false;
//    for ( var i = 0; i < color.length; i++) {
//        if(color[i].checked) {
//        ischecked_method = true;
//        console.log("checked");
//        break;
//        }
//    }
    
    
    if (document.getElementById("red").checked) {
        getmain.style.backgroundColor = red;
        for(var i=0; i < getschets.length; i++) {
            getschets[i].style.stroke = offwhite;
        }
        for(var j=0; j < getcijfer.length; j++) {
            getcijfer[j].style.fill = offwhite;
        }
        for(var k=0; k < getnotities.length; k++) {
            getnotities[k].style.stroke = offwhite;
        }
    }
    else if (document.getElementById("blue").checked) {
        getmain.style.backgroundColor = blue;
        for(var i=0; i < getschets.length; i++) {
            getschets[i].style.stroke = orange;
        }
        for(var j=0; j < getcijfer.length; j++) {
            getcijfer[j].style.fill = orange;
        }
        for(var k=0; k < getnotities.length; k++) {
            getnotities[k].style.stroke = orange;
        }
    }
    else if (document.getElementById("orange").checked) {
        getmain.style.backgroundColor = orange;
        for(var i=0; i < getschets.length; i++) {
            getschets[i].style.stroke = offwhite;
        }
        for(var j=0; j < getcijfer.length; j++) {
            getcijfer[j].style.fill = offwhite;
        }
        for(var k=0; k < getnotities.length; k++) {
            getnotities[k].style.stroke = offwhite;
        }
    }
    else if (document.getElementById("blueprint").checked) {
        getmain.style.backgroundColor = blueprint;
        for(var i=0; i < getschets.length; i++) {
            getschets[i].style.stroke = white;
        }
        for(var j=0; j < getcijfer.length; j++) {
            getcijfer[j].style.fill = white;
        }
        for(var k=0; k < getnotities.length; k++) {
            getnotities[k].style.stroke = white;
        }
    }
}



getbutton.addEventListener("click", function() {
    perspective();
    checkButton();
});

gettheme.addEventListener("click", changeColor);
