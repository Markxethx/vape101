randomHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



function getRandomNumber(){
    return Math.floor(Math.random() * randomHex.length)
}

const tip = document.querySelector('.tip')
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

});

/*tipHolder */

const tipHolder = document.querySelector('.tipHolder')
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

});

/*atomizer */

const atomizer = document.querySelector('.atomizer')
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
  

});

/*body */

const body = document.querySelector('.body')
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

});


const switchA = document.querySelector('.switchA')
const switchRgb= document.querySelector('.switchRgb')
const switchMe = document.querySelector('.clickMe')
const switchMeToo = document.querySelector('.clickMeToo')


const container = document.querySelector('.container')

let index = 0;
let a = "white";
let b = "black"
const colors = [a, b, a, b, a, b, a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b];

switchA.addEventListener('click', function(){


      container.style.background = colors[index];

      switchA.style.color = colors[index + 1];
      switchRgb.style.color = colors[index + 1];
      switchMe.style.color = colors[index + 1];
      switchMeToo.style.color = colors[index + 1];
    
      index = index >= colors.length - 1 ? 100 : index + 1;
      

});

const switchRgbb = document.querySelector('.switchRgb')
switchRgbb.addEventListener('click', function(){
    let hexColor = "#";

    for (a = 0; a < 6; a ++) {

        hexColor += randomHex[getRandomNumber()]
    } 

    
    let hexColors = "#";

    for (a = 0; a < 6; a ++) {

        hexColors += randomHex[getRandomNumber()]
    } 
     
    
    container.style.background = `linear-gradient( ${hexColor}, ${hexColors})`;

});

const clickMee = document.querySelector('.clickMe')
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

const clickMeeToo = document.querySelector('.clickMeToo')
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




