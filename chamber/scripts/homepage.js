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

const day = now.getDay();
const joinMess = document.querySelector(".joinUsMess");

if (day == 1 ){
    joinMess.style.display = 'block' ;
}
else if (day == 2 ){
    joinMess.style.display = 'block' ;
}
else {
joinMess.style.display = 'none' ;
}



// For the responisive navigation//
function toggleMenu(){
    document.getElementById("nav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;