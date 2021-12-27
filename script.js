let elementContainer = document.getElementById("container");


let header1 = document.createElement("header");

header1.textContent = "No Turning Back...";
header1.style.fontSize = "x-large";
header1.style.textAlign = "center";
elementContainer.appendChild(header1);



let button1 = document.createElement("button");

button1.textContent = "Go Forward";
button1.style.color = "blue";
elementContainer.appendChild(button1);

let button2 = document.createElement("button");

button2.textContent = "Do Not Go Back";
button2.style.color = "red";
elementContainer.append(button2);


