//For the dynamic time & date//
const options = {year:'numeric'};
document.getElementById("currentyear").innerHTML = new Date().toLocaleDateString('en', options);
let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = text;
const optionss = {day: 'numeric', month:'long', year:'numeric'};
document.getElementById("headerdate").innerHTML = new Date().toLocaleDateString('en', optionss);

// For the responisive navigation//
function toggleMenu(){
    document.getElementById("nav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;