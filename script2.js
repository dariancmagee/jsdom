let elementContainer = document.getElementById("container");


let header1 = document.createElement("header");

header1.textContent = "Your New Path";
header1.style.fontSize = "x-large";
header1.style.textAlign = "center";
header1.style.fontSize = "55px";
elementContainer.appendChild(header1);

let body = document.createElement("p");

body.textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nesciunt impedit eligendi facilis exercitationem voluptas reprehenderit consequatur tempora quam eum? Quia quod quisquam laborum eligendi ea porro ipsam architecto quasi.";
body.style.fontSize = "20px";
body.style.fontWeight = "bold";
elementContainer.appendChild(body);

let list1 = document.createElement("ul");
let list2 = document.createElement("ul");
let list3 = document.createElement("ul");

list1.textContent = "What You Know";
list1.style.fontSize = "25px";
list1.style.color = "green";
elementContainer.appendChild(list1);

list2.textContent = "What Think You Know";
list2.style.fontSize = "25px";
list2.style.color = "green";
elementContainer.appendChild(list2);

list3.textContent = "What You Will Know";
list3.style.fontSize = "25px";
list3.style.color = "green";
elementContainer.appendChild(list3);


let header2 = document.createElement("header2");

header2.textContent = "Choose Wisely...";
header2.style.fontSize = "30px";
header2.style.color = "red";
header2.style.textAlign = "center";
elementContainer.appendChild(header2);

