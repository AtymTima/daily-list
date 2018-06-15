let button = document.getElementsByTagName("button")[1];
let i = 0;
let input = document.getElementById("userinput");
let enter = document.getElementById("enter");
let ul = document.querySelector("ul");
// let testing = document.getElementById("testing");

// checks the length of the input
const inputLength = () => {
	return input.value.length;
}

// creates an alement
const createListElement = () => {
	// creates a LI element from input value
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add("listItem");
	li.addEventListener("click", checked);
	input.value = "";

	// switches between styles
	function checked(){
		li.classList.toggle("css");
	}

	// creates a button to remove items froms list
	const remove = document.createElement("button");
	li.appendChild(remove);
	remove.classList.add("deleteBtn");
	remove.appendChild(document.createTextNode("X"));


	remove.addEventListener("click", removeItemFromList);

	function removeItemFromList(){
		remove.parentNode.removeChild(remove);
		li.parentNode.removeChild(li);
	}
}

const createListAfterClick = () =>{
	if(inputLength() != 0){
	createListElement()}
}

const createListAfterKeypress = (event) =>{
	if(inputLength() > 0 && event.keyCode === 13){
	createListElement()}
}

// function addTestingToList(){
// 	const li = document.createElement("li");
// 	li.appendChild(document.createTextNode("Testing"));
// 	ul.appendChild(li);
// }

const alertClick = () =>{
	alert("THERE IS NO ESCAPE!");
	i++;
}

const alertKeypress = () =>{
	if (i === 0) {
		alert("NO, RETURN! Click me!");
	}else{
		i--;
	}
}

// testing.addEventListener("click", addTestingToList);

enter.addEventListener("click", createListAfterClick);

input.addEventListener("keypress", createListAfterKeypress);

button.addEventListener("click", alertClick);

button.addEventListener("mouseleave", alertKeypress);


let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// random2.addEventListener("click", setRandom);

