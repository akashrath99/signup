const API = "https://your-backend.onrender.com"; // backend deploy hone ke baad ye URL paste karo

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API}/api/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });
  const data = await res.json();
  messageDiv.innerText = data.message;
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.token) {
    messageDiv.innerText = `Welcome ${data.user.name}!`;
    localStorage.setItem("token", data.token);
  } else {
    messageDiv.innerText = data.message;
  }
});
