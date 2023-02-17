const para = document.querySelector("#output");
const span = document.createElement("span");
function calculateWindSpeed(temp, windS){
    const temp1 = parseInt(temp);
    const windS1 = parseInt(windS);
    return 35.74 + (0.6215 * temp1) - (35.75 * (windS1**0.16)) + (0.4275 * temp1 * (windS1 ** 0.16));
}

const htmlTemp = parseInt(document.getElementById('tempV').innerHTML);
 

const htmlwindS = parseInt(document.getElementById('speedV').innerHTML);
if (htmlTemp <= 50 && htmlwindS > 3){
const windChill = Math.round(calculateWindSpeed(htmlTemp, htmlwindS));

span.textContent = (windChill +  ' mph');
}
else {
    span.textContent = "N/A";
}
para.appendChild(span);






 