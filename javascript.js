// Dynamically create 256 (16x16) child div elements 
// and append them to the container
const gridContainer = document.querySelector("#grid-container");

const promptButton = document.querySelector(".grid-size");
const INITIAL_GRID_SIZE = 16;


function createGridItems(size) {
    // Clear existing grid items first
    gridContainer.innerHTML = ''; 

    const totalCells = size*size;
    for (let i = 0; i < totalCells; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('grid-item');
        // width: 100% / size;
        // height: 100% / size;
        gridItem.style.width = `${100 / size}%`;
        gridItem.style.height = `${100 / size}%`;

        // Add text content to see numbering for now
        gridItem.textContent = i + 1;
        gridContainer.appendChild(gridItem);
    }
}

// prompt user to enter grid size, max value 100
promptButton.addEventListener("click", () => {
    const MAX_VALUE = 100;
    let userGridSize;
    let isValid = false;

    while (!isValid) {
        // Prompt user for input (prompt returns a string or null if cancelled)
        let inputString = prompt(`Enter grid size less than ${MAX_VALUE}: `);
        if (inputString === null || inputString === "") {isValid = false;}

        // Convert the input string to a number
        let numberValue = Number(inputString);

        // Check if it's an integer, not NaN, and less than MAX_VALUE
        if (Number.isInteger(numberValue) && numberValue <= MAX_VALUE && numberValue >= 1) {
            isValid = true;
            userGridSize = numberValue;
            createGridItems(userGridSize);
        }
    }
});

gridContainer.addEventListener('mouseover', event => {
    // check if the hovered element matches a grid item
    if (event.target.matches('.grid-item')) {
        event.target.classList.add("hovered");
    }
});

// Initial grid creation on page load (16x16)
createGridItems(INITIAL_GRID_SIZE);