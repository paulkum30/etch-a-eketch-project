// Dynamically create 256 (16x16) child div elements 
// and append them to the container
const gridContainer = document.querySelector("#grid-container");
const GRID_SIZE = 16;
const totalCells = GRID_SIZE*GRID_SIZE;

function createGridItems(number) {
    for (let i = 0; i < number; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('grid-item');

        // Add event listener for mouse entering the element
        // Or we can use event delegation approach
        // gridItem.addEventListener('mouseenter', () => {
        //     gridItem.classList.add("hovered");
        // });
        // Add text content to see numbering for now
        gridItem.textContent = i + 1;
        gridContainer.appendChild(gridItem);
    }
}

gridContainer.addEventListener('mouseover', event => {
    // check if the hovered element matches a grid item
    if (event.target.matches('.grid-item')) {
        event.target.classList.add("hovered");
    }
});

createGridItems(totalCells);