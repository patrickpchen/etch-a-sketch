let containerGrid = document.querySelector('.container');

createDefaultGrid(16);

//Create three different reset buttons.
//Link them to three different functions.
let defaultButton = document.querySelector('#default');
defaultButton.addEventListener('click', resetToDefault);

let colorButton = document.querySelector('#random_color');
colorButton.addEventListener('click', resetToColor);

let grayscaleButton = document.querySelector('#grayscale');
grayscaleButton.addEventListener('click', resetToGrayscale);

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

function resetToGrayscale(){
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
        createGrayGrid(numOfPix);
    }
}

//Add different event listeners to the pixels
//based on the buttons the user clicked.
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

function createGrayGrid(x){
    createGrid(x);    
    let pix = document.querySelectorAll('.pixel');
    pix.forEach((p) => {
        p.addEventListener('mouseover', changeColorGrayscale);
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

//Add 10% shade with every pass-through
function changeColorGrayscale(e){
    if (e.target.style.background === 'rgb(0, 0, 0)'){
        return;
    } else if (e.target.style.background === 'rgba(0, 0, 0, 0.9)'){
        e.target.style.background = 'rgb(0, 0, 0)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.8)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.9)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.7)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.8)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.6)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.7)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.5)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.6)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.4)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.5)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.3)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.4)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.2)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.3)';
    } else if(e.target.style.background === 'rgba(0, 0, 0, 0.1)'){
        e.target.style.background = 'rgba(0, 0, 0, 0.2)';
    } else {
        e.target.style.background = 'rgba(0, 0, 0, 0.1)';
    }
    console.log(e.target.style.background);
}