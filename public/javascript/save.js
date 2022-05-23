// html ids
const saveCharBtn = document.getElementById("save-character");

// create a character object with all the various information
const saveBtnHandler = (event) => {
    event.preventDefault();

    // object to store info
    let character = {};

    // grab info
    character.name = document.getElementById("name").value;
    character.class = document.getElementById("class").value;
    character.strength = document.getElementById("strength").value.trim();
    character.dexterity = document.getElementById("dexterity").value.trim();
    character.constitution = document.getElementById("constitution").value.trim();
    character.intelligence = document.getElementById("intelligence").value.trim();
    character.wisdom = document.getElementById("wisdom").value.trim();
    character.charisma = document.getElementById("charisma").value.trim();
    character.race = document.getElementById("race").value;
    character.hit_points = document.getElementById("hit-points").value;
    character.armor_class = document.getElementById("armor-class").value;
    character.level = document.getElementById("level").value;

    // send object to fetch request handler
    saveFetch(character);
}

// send character object to server
const saveFetch = (character) => {
    const response = fetch(`api/characters`, {
        method: 'POST',
        body: JSON.stringify(character),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response) {
        // reload page
        document.location.reload();
    } else {
        console.log("Something went wrong!");
    }
}

const refreshPage = (event) => {
    setInterval(function(){
        document.location.reload();
    }, 200);
}

// event listener
saveCharBtn.addEventListener("click", saveBtnHandler);
saveCharBtn.addEventListener("click", refreshPage);