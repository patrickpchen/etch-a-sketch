let containerGrid = document.querySelector('.container');

//Create divs for the grid.

for (let i = 0; i < 16; i++){
    //Create X number of rows.
    let littleGrid = document.createElement('div');
    littleGrid.setAttribute('style', 'display: flex;');

    for (let i = 0; i < 16; i++){
        //Create X number of little divs and put them in a row.
        
        let littleDiv = document.createElement('div');
        littleDiv.setAttribute('style','height: 50px; width: 50px; border-color: black; border: 1px solid;');
        littleDiv.classList.add('pixel');
        //Put the divs in the container.
        
        littleGrid.appendChild(littleDiv);
    }
    containerGrid.appendChild(littleGrid);
}

function changeColor(e){
    e.target.style.background = 'blue';
}

let pix = document.querySelector('.container');
pix.addEventListener('mouseover', changeColor);