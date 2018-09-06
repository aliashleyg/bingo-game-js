let number;
let countArray = [];
let totalNumberOfNumbers = 24;
let columnB = [];
let columnI = [];
let columnN = [];
let columnG = [];
let columnO = [];

//create a randomly generated number (x) between 1 and 75
function createRandomNumber(number) {
	number = Math.floor((Math.random() * 75) + 1);
	return number;
	}

//MASTER FUNCTION
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
























// //create a randomly generated number (x) between 1 and 75
// function createRandomNumber(number) {
// 	number = Math.floor((Math.random() * 75) + 1);
// 	return number;
// 	}

// number = createRandomNumber(number);

// //check which letter array (B,I,N,G,O) that (x) belongs to
// function checkArray(number) {
// 	if (number <= 15) {
// 		checkArrayBLength(number);
// 	} else if (number >=15 && number < 30) {
// 		checkArrayClength(number);
// 	}
// }

// function checkArrayBLength(number) {
// 	if (columnB.length < 4) {
// 		checkForDuplicate(number);
// 	} else {
// 		console.log("too many numbers");
// 	}
// }

// function checkArrayBLength(number) {
// 	if (columnB.length < 4) {
// 		checkForDuplicate(number);
// 	} else {
// 		console.log("too many numbers");
// 	}
// }

// checkArray(number);
// function checkForDuplicate(number) {
// 	columnB.push(number);
// 	if(columnB.indexOf(number)>=0) {
// 		console.log(columnB);
// 	} else {
// 		console.log("nope, skip to next random number");
// 	}

// }












//code purgatory
