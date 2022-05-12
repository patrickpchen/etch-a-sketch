let containerGrid = document.querySelector('.container');

createDefaultGrid(16);

//Create three different reset buttons.
//Link them to three different functions.
let defaultButton = document.querySelector('#default');
defaultButton.addEventListener('click', resetToDefault);

let colorButton = document.querySelector('#random_color');
colorButton.addEventListener('click', resetToColor);

let grayscaleButton = document.querySelector('#grayscale');
grayscaleButton.addEventListener('click', askAndCreate);

//Create three different functions for the three buttons.
function resetToDefault(){
    let numOfPix = prompt('How many pixels per side do you want? (Keep it under 100.)', '16');
    if (numOfPix < 0 || numOfPix > 100){
        alert ("Please provide a value between 1 and 100.");
    } else {
        numOfPix = Number(numOfPix);
        //Remove the existing grid first.
        while(containerGrid.hasChildNodes()){
            containerGrid.removeChild(containerGrid.firstChild);
        }
        //Create the new grid.
        createDefaultGrid(numOfPix);
    }
}

function resetToColor(){
    let numOfPix = prompt('How many pixels per side do you want? (Keep it under 100.)', '16');
    if (numOfPix < 0 || numOfPix > 100){
        alert ("Please provide a value between 1 and 100.");
    } else {
        numOfPix = Number(numOfPix);
        //Remove the existing grid first.
        while(containerGrid.hasChildNodes()){
            containerGrid.removeChild(containerGrid.firstChild);
        }
        //Create the new grid.
        createColorGrid(numOfPix);
    }
}

function askAndCreate(){
    let numOfPix = prompt('How many pixels per side do you want? (Keep it under 100.)', '16');
    if (numOfPix < 0 || numOfPix > 100){
        alert ("Please provide a value between 1 and 100.");
    } else {
        numOfPix = Number(numOfPix);
        //Remove the existing grid first.
        while(containerGrid.hasChildNodes()){
            containerGrid.removeChild(containerGrid.firstChild);
        }
        //Create the new grid.
        createColorGrid(numOfPix);
    }
}



function createDefaultGrid(x){
    createGrid(x);    
    let pix = document.querySelectorAll('.pixel');
    pix.forEach((p) => {
        p.addEventListener('mouseover', changeColorDefault);
    });
}

function createColorGrid(x){
    createGrid(x);    
    let pix = document.querySelectorAll('.pixel');
    pix.forEach((p) => {
        p.addEventListener('mouseover', changeColorRandomly);
    });
}

//Create a blank grid.
function createGrid(x){
    for (let i = 0; i < x; i++){
        //Create X number of rows.
        let littleGrid = document.createElement('div');
        littleGrid.setAttribute('style', 'display: flex; flex: 1 1 auto;');

        for (let i = 0; i < x; i++){
            //Create X number of little divs and put them in a row.   
            let littleDiv = document.createElement('div');
            littleDiv.setAttribute('style','border-color: black; border: 1px solid; flex: 1 1 auto;');
            littleDiv.classList.add('pixel');
            //Put the divs in the container.   
            littleGrid.appendChild(littleDiv);
        }
        containerGrid.appendChild(littleGrid);
    }
}

//The default is black and white.
function changeColorDefault(e){
    e.target.style.background = 'black';
}

//Change a square to a random color.
function changeColorRandomly(e){
    let r = Math.round((Math.random())*1000) % 256;
    let g = Math.round((Math.random())*1000) % 256;
    let b = Math.round((Math.random())*1000) % 256;
    e.target.style.background = `rgb(${r}, ${g}, ${b})`;
}