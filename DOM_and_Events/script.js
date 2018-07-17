function makeTable() {
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var headTr = document.createElement("tr");
	var tbody = document.createElement("tbody");
	document.body.appendChild(table);
	table.appendChild(thead);
	thead.appendChild(headTr);
	table.appendChild(tbody);
	//populate the header row
	for (var x = 0; x < 4; x++) {
		var td = document.createElement("td");
		td.textContent = "Header " + (x + 1);
		td.style.padding = "7px";
		headTr.appendChild(td);
	};
	//populate the body rows
	for (var y = 0; y < 3; y++) {
		var bodyTr = document.createElement("tr");
		tbody.appendChild(bodyTr);
		for (var z = 0; z < 4; z++) {
			var td = document.createElement("td");
			td.textContent = (y + 1) + ', ' + (z + 1);
			td.style.padding = "7px";
			td.style.border = "1px solid white";
			bodyTr.appendChild(td);
		};
	};
	//have the first body cell pre-selected
	select(tbody.firstElementChild.firstElementChild);
};

var currentNode = null;
//selects the cell and gives it a border
function select(element) {
	if (currentNode) {
		currentNode.style.border = "1px solid white";
	};
	currentNode = element;
	element.style.border = "1px solid black";
};
//marks the cell permenantly yellow
function mark() {
	currentNode.style.backgroundColor = "yellow";
};
//controls moving from cell to cell
function move(event) {
	var direction = event.target.id;
	switch(direction) {
		case "up":
			var up = currentNode.parentNode.previousElementSibling;
			if (up) {
				select(up.children[currentNode.cellIndex]);
			};
			break;
		case "down":
			var down = currentNode.parentNode.nextElementSibling;
			if (down) {
				select(down.children[currentNode.cellIndex]);
			};
			break;
		case "right":
			var right = currentNode.nextElementSibling;
			if (right) {
				select(right);
			};
			break;
		case "left":
			var left = currentNode.previousElementSibling;
			if (left) {
				select(left);
			};
			break;
	};
};
//makes direction buttons
function dirButtons() {
	var dir = ["up", "down", "left", "right"];
	for (var i = 0; i < dir.length; i++) {
		var dirButton = document.createElement("button");
		dirButton.setAttribute("id", dir[i]);
		dirButton.textContent = dir[i];
		dirButton.style.margin = "7px";
		dirButton.addEventListener("click", move);
		document.body.appendChild(dirButton);
	}
};
//makes the mark button
function markButton() {
	var mar = document.createElement("button");
	mar.textContent = "Mark Cell";
	mar.setAttribute("id", "cell-marker");
	mar.style.margin = "7px";
	document.body.appendChild(mar);
	mar.addEventListener("click", mark);
};

makeTable();
dirButtons();
markButton();