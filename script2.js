let elementContainer = document.getElementById("container");


let header1 = document.createElement("header");

header1.textContent = "Your New Path";
header1.style.fontSize = "x-large";
header1.style.textAlign = "center";
elementContainer.appendChild(header1);

let body = document.createElement("p");

body.textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nesciunt impedit eligendi facilis exercitationem voluptas reprehenderit consequatur tempora quam eum? Quia quod quisquam laborum eligendi ea porro ipsam architecto quasi.";
elementContainer.appendChild(body);

let list1 = document.createElement("ul");
let list2 = document.createElement("ul");
let list3 = document.createElement("ul");

list1.textContent = "What You Know";
elementContainer.appendChild(list1);

list2.textContent = "What Think You Know";
elementContainer.appendChild(list2);

list3.textContent = "What You Will Know";
elementContainer.appendChild(list3);