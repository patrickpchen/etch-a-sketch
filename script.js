let containerGrid = document.querySelector('.container');

createDefaultGrid(16);

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', askAndCreate);

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

function changeColorRandomly(e){
    let r = Math.round((Math.random())*1000) % 256;
    let g = Math.round((Math.random())*1000) % 256;
    let b = Math.round((Math.random())*1000) % 256;
    e.target.style.background = `rgb(${r}, ${g}, ${b})`;
}