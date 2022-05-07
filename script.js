let containerGrid = document.querySelector('.container');

//Create divs for the grid.

for (let i = 0; i < 4; i++){
    //Create X number of rows.
    let littleGrid = document.createElement('div');
    littleGrid.setAttribute('style', 'display: flex;');

    for (let i = 0; i < 4; i++){
        //Create X number of little divs and put them in a row.
        
        let littleDiv = document.createElement('div');
        littleDiv.setAttribute('style','height: 100px; width: 100px; border-color: black; border: 3px solid;');
        //Put the divs in the container.
        
        littleGrid.appendChild(littleDiv);
    }
    containerGrid.appendChild(littleGrid);
}