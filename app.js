let gridCont = document.querySelector('#gridCont');
let userSize = prompt('Input number for new grid size','');
const newRow = [];
const newCol = [];
let colCount = 0;


for (r = 0; r < userSize; r++){
    newRow[r] = document.createElement('div');
    newRow[r].setAttribute('id', `row${r}`);
     gridCont.appendChild(newRow[r]);
     for (c = 0; c < userSize; c++){
        newCol[c] = document.createElement('div');
        newCol[c].setAttribute('id', `column-${colCount}`);
        newRow[r].appendChild(newCol[c]);
        colCount++;
        //grid.push(document.querySelector(`column-${colCount}`));
     }
}


const grid = document.querySelectorAll("div[id^='column']");




grid.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: black');
    });
    
});