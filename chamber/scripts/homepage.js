//For the dynamic time & date//
const options = {year:'numeric'};
document.getElementById("currentyear").innerHTML = new Date().toLocaleDateString('en', options);
let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = text;

const now = new Date();
const fulldateUK = new
Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
document.getElementById("headerdate").innerHTML = `<em>${fulldateUK}</em>`;



// For the responisive navigation//
function toggleMenu(){
    document.getElementById("nav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;