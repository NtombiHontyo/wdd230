const options = {year:'numeric'};
document.getElementById("currentyear").innerHTML = new Date().toLocaleDateString('en', options);
let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = text;