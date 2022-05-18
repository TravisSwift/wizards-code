// html ids
const saveCharBtn = document.getElementById("save-character");

// create a character object with all the various information
const saveBtnHandler = (event) => {
    event.preventDefault();

    // object to store info
    let character = {};

    // grab info
    character.name;
    character.class;
    character.strength;
    character.dexterity;
    character.constitution;
    character.intelligence;
    character.wisdom;
    character.charisma;
    character.race;
    character.hit_points;
    character.armor_class;
    character.level;

    // send object to fetch request handler
    saveFetch(character);
}

// send character object to server
const saveFetch = (character) => {
    const response = await fetch(`api/characters`, {
        method: 'POST',
        body: JSON.stringify(character),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.ok) {
        // alert people somehow? reload page?
    } else {
        alert(response.statusText);
    }
}

// event listener
saveCharBtn.addEventListener("click", saveBtnHandler);