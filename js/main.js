function hamburgerToggle(){
	var x = document.getElementById("links");
	var y = document.querySelector(".icon");
	var c = document.querySelector("#icon-close");
	if(x.style.display === "inline-block"){
		x.style.display = "none";
		y.style.color = "antiquewhite";
		y.style.display = "inline-block";
		c.style.display = "none";
	}
	else{
		x.style.display = "inline-block";
		y.style.display = "none";
		c.style.display = "inline-block";
		c.style.color = "grey";
	}
}