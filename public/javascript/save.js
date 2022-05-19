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
    character.strength = document.getElementById("strength").value;
    character.dexterity = document.getElementById("dexterity").value;
    character.constitution = document.getElementById("constitution").value;
    character.intelligence = document.getElementById("intelligence").value;
    character.wisdom = document.getElementById("wisdom").value;
    character.charisma = document.getElementById("charisma").value;
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

    if (response.ok) {
        // alert people somehow? reload page?
        alert("Character saved!");
    } else {
        alert(response.statusText);
    }
}

// event listener
saveCharBtn.addEventListener("click", saveBtnHandler);