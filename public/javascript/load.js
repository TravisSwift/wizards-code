// html ids
const loadBtn = document.getElementById("load-character");

// get list of user's characters
const getCharList = () => {
    // using user id, make fetch request
}

// show the list on the page
const showCharList = (arr) => {
    // iterate through array of characters
    for (let i = 0; i < arr.length; i++) {
        // create li elements to populate ul

        // set character id to the element
    }
}

// load button handler (receive character)
const loadBtnHandler = (event) => {
    event.preventDefault();

    // grab character id

    // make fetch request using character id

    // send character to be displayed on sheet
}

// put character info in sheet
const displayCharacter = (character) => {
    // set various values in the page to display
}

// event listener
loadBtn.addEventListener("click", loadBtnHandler);