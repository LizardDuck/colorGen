var css = document.querySelector('h3');
var color1 = document.querySelector(".color1"); //class selector
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
// console.log(randomColor);

function randColor(){
	var c1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var c2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

	body.style.background = 
	"linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2
	+ ")";


	color1.value = c1;
	color2.value = c2;
	css.textContent = "Colors:" + c1 + " to " + c2; 
	
}


function changeColor(){
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
		// css.textContent = body.style.background + ";";
		css.textContent = "Colors:" + color1.value + " to " + color2.value; 

}
  
css.textContent = "Colors:" + color1.value + " to " + color2.value;



color1.addEventListener("input", changeColor);


color2.addEventListener("input", changeColor);
button.addEventListener("click", randColor);
//can also add: oninput = "changeColor()" in the HTML input 


