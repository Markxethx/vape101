randomHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



function getRandomNumber(){
    return Math.floor(Math.random() * randomHex.length)
}

const tip = document.querySelector('.tip');
tip.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    }

    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    
    tip.style.background = `linear-gradient(to top, ${hexColor}, ${hexColors})`;
    tipMe.style.color = hexColor; 
});

/*tipHolder */

const tipHolder = document.querySelector('.tipHolder');
tipHolder.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 
    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    
    tipHolder.style.background = `linear-gradient(to bottom, ${hexColor}, ${hexColors})`;
    tipHolderMe.style.color = hexColor;
});

/*atomizer */

const atomizer = document.querySelector('.atomizer');
atomizer.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 
    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    
    atomizer.style.background = `linear-gradient(to top, ${hexColor}, ${hexColors})`;
    atomizerMe.style.color = hexColor;

});

/*body */

const body = document.querySelector('.body');
body.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    
    body.style.background = `linear-gradient( ${hexColor}, ${hexColors})`;
    bodyMe.style.color = hexColor;
});


const switchA = document.querySelector('.switchA');
const switchRgb= document.querySelector('.switchRgb');
const switchMe = document.querySelector('.clickMe');
const switchMeToo = document.querySelector('.clickMeToo');
const crossFather = document.querySelector('.crossFather');
const touch = document.querySelector('.touch');
const touchTwo = document.querySelector('.touchTwo');
const touchMe = document.querySelector('.touchMe')
const touchTwoMe = document.querySelector('.touchTwoMe');
const geekVape = document.querySelector('.geekVape');
const tipMe = document.querySelector('.tipMe');
const tipHolderMe = document.querySelector('.tipHolderMe');
const atomizerMe = document.querySelector('.atomizerMe');
const bodyMe = document.querySelector('.bodyMe');
const triangle = document.querySelector('.triangle');
const boxes= document.querySelector('.boxes');

const container = document.querySelector('.container');

let index = 0;
let a = "white";
let b = "black"
const colors = [a, b, a, b, a, b, a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b];

switchA.addEventListener('click', function(){


      container.style.background = colors[index];

      switchA.style.color = colors[index + 1];

      index = index >= colors.length - 1 ? 100 : index + 1;
      

});

/* tip */

tipMe.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    tip.style.background = `linear-gradient(to top, ${hexColor}, ${hexColors})`;
    tipMe.style.color = hexColor
});

tipHolderMe.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    tipHolder.style.background = `linear-gradient(to top, ${hexColor}, ${hexColors})`;
    tipHolderMe.style.color = hexColor
});

atomizerMe.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    atomizer.style.background = `linear-gradient(to top, ${hexColor}, ${hexColors})`;
    atomizerMe.style.color = hexColor
});

bodyMe.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    body.style.background = `linear-gradient(to top, ${hexColor}, ${hexColors})`;
    bodyMe.style.color = hexColor
});

crossFather.addEventListener('click', function(){
    cross1 = document.querySelector('.cross1')
    cross2 = document.querySelector('.cross2')
    cross3 = document.querySelector('.cross3')
    cross4 = document.querySelector('.cross4')
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    cross1.style.color = hexColor;
    cross2.style.color = hexColor;
    cross3.style.color = hexColor;
    cross4.style.color = hexColor;
    crossFather.style.color = hexColor;
    console.log("hello")
});

geekVape.addEventListener('click', function(){
    geek = document.querySelector('.geek');
    vape = document.querySelector('.vape')
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 
     
    geek.style.color = hexColor;
    vape.style.color = hexColor;
    geekVape.style.color = hexColor;
});


triangle.addEventListener('click', function(){

    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 
     
    touch.style.borderLeft = "10px " +  "solid " + hexColor;
    touchTwo.style.borderLeft = "10px " +  "solid " + hexColor;
    touchMe.style.borderLeft = "10px " + "solid " + hexColor;
    touchTwoMe.style.borderLeft = "10px " + "solid " + hexColor;
    triangle.style.color = hexColor
});

switchRgb.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    
    container.style.background = `linear-gradient( ${hexColor}, ${hexColors})`;
    switchRgb.style.color = hexColors;
});

boxes.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 
    
    body.style.borderTop = '5px ' + 'solid ' + hexColor;
    body.style.borderBottom = '5px ' + 'solid ' + hexColor;
    boxes.style.color = hexColor;
});

const clickMee = document.querySelector('.clickMe');
clickMee.addEventListener('click', function(){
    headBox = document.querySelector('.headBox')
    firstBox = document.querySelector('.firstBox')
    footBox = document.querySelector('.footBox')

    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    firstBox.style.background = `linear-gradient( ${hexColor}, ${hexColors})`;
    headBox.style.borderLeft = "168px " + "solid" + hexColor
    footBox.style.borderLeft = "170px " + "solid" + hexColors
    switchMe.style.color = hexColor ;
});

const clickMeeToo = document.querySelector('.clickMeToo');
clickMeeToo.addEventListener('click', function(){
    babyBox = document.querySelector('.babyBox')
    babyBoxHead = document.querySelector('.babyBoxHead')
    babyBoxFoot = document.querySelector('.babyBoxFoot')

    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    babyBox.style.background = `linear-gradient( ${hexColor}, ${hexColors})`;
    babyBoxHead.style.borderLeft = "108px " + "solid" + hexColor
    babyBoxFoot.style.borderLeft = "108px " + "solid" + hexColors
    switchMeToo.style.color = hexColor
});




