async function login() {
    const user1 = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    try {
        const response = await fetch("https://bitebuddy-production.up.railway.app/api/customer/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user1,
                password: pass
            })
        });

        if (!response.ok) {
            throw new Error("Invalid username or password");
        }

        const data = await response.json();
        window.location.href = "menu.html?username=" + encodeURIComponent(data.username || user1);
    } catch (error) {
        console.log("Error:", error);
        alert(error.message || "Login failed");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".auth-form");
    if (!form || !document.getElementById("password")) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        login();
    });
});

