
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("ltc-address").value;

  if (email && password && address) {
    localStorage.setItem("email", email);
    localStorage.setItem("ltcAddress", address);
    window.location.href = "dashboard.html";
  }
});
