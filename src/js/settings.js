const themeControl = document.getElementById("themeControl");



// Load Settings
themeControl.checked = localStorage.getItem("themeControl") === "true";



// Save Settings
themeControl.addEventListener("change", () => {
  localStorage.setItem("themeControl", themeControl.checked);
});