var numberOfFaces = 2;

function game() {
	var leftSide = document.getElementById("leftSide");
	var rightSide = document.getElementById("rightSide");
	var gameField = document.getElementById("gameField");
	var restart = document.getElementById("restart");
	var faces = document.getElementById("faces");
	killAllChilds(leftSide);
	killAllChilds(rightSide);
	faces.firstChild.textContent = numberOfFaces - 1;

	restart.onclick = function(event) {
		location.reload();
	}

	for (i = 0; i < numberOfFaces; i++) {
		posX = Math.floor((Math.random() * 400));
		posY = Math.floor((Math.random() * 400));
		img = document.createElement("img");
		img.src = "smile.png";
		leftSide.appendChild(img);
		img.style.left = posX + "px";
		img.style.top = posY + "px";
	}
	
	rightSide.appendChild(leftSide.cloneNode(true));
	leftSide.removeChild(leftSide.lastChild);

	gameField.onclick = function (event) {
		alert("Game Over");
		gameField.onclick = null;
		rightSide.lastChild.lastChild.onclick = null;
	}

	rightSide.lastChild.lastChild.onclick = function(event) {
		event.stopPropagation();
		numberOfFaces *= 2;
		game();
	};


}

function killAllChilds(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}