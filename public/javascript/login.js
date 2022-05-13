async function signupForm(event) {
    event.preventDefault();

    // grabbing the data from the form
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    // if all information is provided
    if (username && email && password) {
        await fetch("/api/users", {
            method: "post",
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { "Content-Type": "application/json" }
         });
         if (response.ok) {
             console.log("success");
         } else {
             alert(response.statusText);
         }
    }
}

async function loginForm(event) {
    event.preventDefault();

    // grabbing the data from the form
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

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

document.querySelector(".signup-form").addEventListener("submit", signupForm);
document.querySelector(".login-form").addEventListener("submit", signupForm);