let elementContainer = document.getElementById("container");


let header1 = document.createElement("header");

header1.textContent = "No Turning Back...";
header1.style.fontSize = "50px";
header1.style.textAlign = "center";
elementContainer.appendChild(header1);


let button1 = document.createElement("button");

button1.textContent = "Go Forward";
button1.style.color = "blue";
button1.style.fontSize = "20px";
elementContainer.appendChild(button1);

let button2 = document.createElement("button");

button2.textContent = "Do Not Go Back";
button2.style.color = "red";
button2.style.fontSize = "20px";
elementContainer.append(button2);

