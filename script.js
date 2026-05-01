const eyeButton = document.querySelector("#registerScreen .eye-button");
const passwordInput = document.getElementById("password");

if (eyeButton && passwordInput) {
  eyeButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeButton.textContent = "🙈"; 
    } else {
      passwordInput.type = "password";
      eyeButton.textContent = "👁"; 
    }
  });
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const lastname = document.getElementById("lastname")?.value || "";
    const place = document.getElementById("place")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const password = passwordInput?.value || "";

    const accounts = Array.from(document.querySelectorAll("input[name='account']:checked"))
                          .map(acc => acc.value);

    alert(
      `Account created!\n` +
      `Lastname: ${lastname}\n` +
      `Place: ${place}\n` +
      `Phone: ${phone}\n` +
      `Password: ${password}\n` +
      `Account Type(s): ${accounts.join(", ") || "None"}`
    );
  });
}

document.querySelectorAll(".login-buttons .btn-secondary").forEach(btn => {
  btn.addEventListener("click", () => {
    const role = btn.dataset.role;
    if (role === "citizens") {
      window.location.href = "Citizen.html";   
    } else if (role === "official") {
      window.location.href = "Official.html";  
    }
  });
});

const citizensLoginForm = document.getElementById("citizensLoginForm");
if (citizensLoginForm) {
  citizensLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullname = document.getElementById("citizenFullname").value;
    alert(`Welcome, ${fullname}! You are now logged in as a Citizen.`);
  });
}

const officialsForm = document.getElementById("officialsForm");
if (officialsForm) {
  officialsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.getElementById("officialType").value;
    const certificate = document.getElementById("certificate").files[0];
    const govID = document.getElementById("govID").files[0];

    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

    alert(
      `Submitted as: ${typeLabel}\n` +
      `Certificate: ${certificate ? certificate.name : "No file"}\n` +
      `Government ID: ${govID ? govID.name : "No file"}`
    );
  });
}
