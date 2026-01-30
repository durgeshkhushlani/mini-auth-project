// Tab buttons
const signupTab = document.getElementById("signupTab");
const loginTab = document.getElementById("loginTab");

// Forms
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

// ----- TAB SWITCHING -----
signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    signupForm.classList.add("active");
    loginForm.classList.remove("active");
});

loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    loginForm.classList.add("active");
    signupForm.classList.remove("active");
});

// ----- SIGNUP -----
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (res.ok) {
            alert("Signup successful! Please login.");
            location.reload(); // signup stays default
        } else {
            alert(data.message);
        }

    } catch (err) {
        alert("Something went wrong");
    }
});

// ----- LOGIN -----
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            window.location.href = "dashboard.html";
        } else {
            alert(data.message);
        }

    } catch (err) {
        alert("Something went wrong");
    }
});
