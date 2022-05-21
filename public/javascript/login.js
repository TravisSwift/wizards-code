async function loginForm(event) {
    event.preventDefault();
    console.log("You're logged in!");

    // grabbing the data from the form
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    // if all information is provided
    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "post",
            body: JSON.stringify({
                email,
                password
            }),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}


async function signupForm(event) {
    event.preventDefault();
    console.log("You've signed up!");

    // grabbing the data from the form
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    // if all information is provided
    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "post",
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector(".login-form").addEventListener("submit", loginForm);

document.querySelector(".signup-form").addEventListener("submit", signupForm);

