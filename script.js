let containerGrid = document.querySelector('.container');

createGrid(16);

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', askAndCreate);

function askAndCreate(){
    let numOfPix = prompt('How many pixels per side do you want? (Keep it under 100.)', '16');
    numOfPix = Number(numOfPix);

    //Remove the existing grid first.
    while(containerGrid.hasChildNodes()){
        containerGrid.removeChild(containerGrid.firstChild);
    }
    //Create the new grid.
    createGrid(numOfPix);
}

//Create divs for the grid.

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
    let pix = document.querySelectorAll('.pixel');

    //Add an event listener to every pixel.
    pix.forEach((p) => {
        p.addEventListener('mouseover', changeColor);
    });
}

function changeColor(e){
    e.target.style.background = 'black';
}