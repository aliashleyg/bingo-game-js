let number;
let countArray = [];
let totalNumberOfNumbers = 24;
let columnB = [];
let columnI = [];
let columnN = [];
let columnG = [];
let columnO = [];

//********************************************************

//SECTION ONE
//CREATE RANDOMLY GENERATED GAME CARD NUMBERS

//********************************************************

//create a randomly generated number (x) between 1 and 75
function createRandomNumber(number) {
	number = Math.floor((Math.random() * 75) + 1);
	return number;
	}

//function to keep track of numbers added to totalNumberOfNumbers array
function arrayCounter(number) {
	while (countArray.length < totalNumberOfNumbers) {
		number = createRandomNumber(number);
		checkForDuplicates(number, countArray);
	}
}

//function to see if new array number is a duplicate
function checkForDuplicates(number, countArray) {
	if (countArray.indexOf(number) === -1) {
		sendNumberToColumn(number);
		countArray.push(number);
		return countArray;
	} else if (countArray.indexOf(number) > -1) {
		return countArray;
	}
}

//function to determine correct column for number
function sendNumberToColumn(number) {
	if (number <= 15 && columnB.length <= 4) {
		columnB.push(number);
	} else if (number > 15 && number <= 30 && columnI.length <=4){
		columnI.push(number);
	} else if (number > 30 && number <= 45 && columnN.length <=3){
		columnN.push(number);
	} else if (number > 45 && number <= 60 && columnG.length <=4){
		columnG.push(number);
	} else if (number > 60 && columnO.length <= 4) {
	 	columnO.push(number);
	} else {
		removeArray(number, countArray);
	}
}

//function to remove number from total array if it doesn't fall into a column
function removeArray(number, countArray) {
	countArray.pop(number);
	return countArray;
}

arrayCounter(number);


//********************************************************

//SECTION ONE
//BIND ELEMENTS TO THE DOM TO BUILD GAME BOARD

//********************************************************


//example code from matching card game
// function cardShuffled(array) {
// 	var i = 0;
// 	var card = document.querySelectorAll(".card");
// 	while(i < array.length) {
// 		card[i] = array[i];
// 		card[i].innerHTML = array[i];
// 		i = i + 1;
// 	} return card;
// }

function buildColumns(countArray, columnB, columnI, columnN, columnG, columnO) {
	let bx = 0;
	let ix = 0;
	let nx = 0;
	let gx = 0;
	let ox = 0;
	let bCells = $('.bCells');
	let iCells = $('.iCells');
	let nCells = $('.nCells');
	let gCells = $('.gCells');
	let oCells = $('.oCells');
	while (bx < columnB.length) {
		bCells[bx].innerHTML = columnB[bx];
		bx++;
	}
	while (ix < columnI.length) {
		iCells[ix].innerHTML = columnI[ix];
		ix++;
	}
	while (nx < columnN.length) {
		nCells[nx].innerHTML = columnN[nx];
		nx++;
	}
	while (gx < columnG.length) {
		gCells[gx].innerHTML = columnG[gx];
		gx++;
	}
	while (ox < columnO.length) {
		oCells[ox].innerHTML = columnO[ox];
		ox++;
	}
}

buildColumns(countArray, columnB, columnI, columnN, columnG, columnO);















//code purgatory


