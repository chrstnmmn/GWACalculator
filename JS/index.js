// initializing variables
let items = [];
let itemCount = 0;
let indexPosition = 0;


// this function will be called to compute the average of the grades from prelim to finals
function computeOverall() {
	const elementId = Date.now();
	// this is the percentage the is going to use as a multiplier
	const Percent = {
		microPercent: 0.2,
		macroPercent: 0.4,
	};

	// getting the value from the user input
	const courseName = document.getElementById("courseInput").value;
	const courseUnit = parseFloat(document.getElementById("courseUnit").value);
	const prelim = parseFloat(document.getElementById("prelimInput").value);
	const midterm = parseFloat(document.getElementById("midtermInput").value);
	const prefinal = parseFloat(document.getElementById("prefinalInput").value);
	const final = parseFloat(document.getElementById("finalInput").value);

	// validating if the user is only putting numbers and not strings
	if (
		isNaN(prelim) ||
		isNaN(midterm) ||
		isNaN(prefinal) ||
		isNaN(final) ||
		isNaN(courseUnit)
	) {
		alert("Invalid Input");
		console.log("Invalid input");
		clearForms();
		return; // Exit the function if validation fails
	}

	// here are the formula for computing the grades
	// as ya'll see prelim to prefinal uses 20% while the finals uses 40%
	// this equivalent to 100%, based on our grading system this is how to compute it
	const ComputeTotal = {
		total1: prelim * Percent.microPercent,
		total2: midterm * Percent.microPercent,
		total3: prefinal * Percent.microPercent,
		total4: final * Percent.macroPercent,
	};
	// after getting the percentage, the next step is getting the sum of all the values
	// the answer is the total average on that course
	const totalGrade =
		ComputeTotal.total1 +
		ComputeTotal.total2 +
		ComputeTotal.total3 +
		ComputeTotal.total4;

	// storing the course detail based from the user to the array for data management
	// also this is later gonna be used for computing the overall GWA
	items
		.push({
			elementId,
			courseName,
			courseUnit,
			prelim,
			midterm,
			prefinal,
			final,
			totalGrade
		})
		.toFixed(2);
	for (let i = 0; i < items.length; i++) {
		itemCount = items.length;
		indexPosition = itemCount;
		console.log("Item added: " + itemCount);
		console.log("Index position of: " + indexPosition);
		console.log(items);

		// if the item inside the array is not emtpy, it will show the result section
		if (itemCount > 0) {
			document.getElementById("viewResult").style.display = "flex";
			viewResult.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			});
		}
	}
	GenerateResultSection(
		elementId,
		courseName,
		prelim,
		midterm,
		prefinal,
		final,
		totalGrade
	);
	clearForms(); // making sure that the forms are clean after getting the input}
}

function GenerateResultSection(
	elementId,
	courseName,
	prelim,
	midterm,
	prefinal,
	final,
	overall
) {
	// get the main table wrapper of the div
	const tableWrapper = document.getElementById("mainTableWrapper");

	// creating the result table wrapper
	const resultTable = document.createElement("div");
	resultTable.className = "resultTable";
	resultTable.id = elementId;

	// creating the title of the result table
	const tableTitle = document.createElement("div");
	tableTitle.className = "tableTitle";
	const titleH2 = document.createElement("h2");
	titleH2.id = "TitleResult";
	titleH2.textContent = courseName;
	tableTitle.appendChild(titleH2);

	// creating the result of grades per terms
	const termsAndGrades = document.createElement("div");
	termsAndGrades.className = "termsAndGrades";

	// creating an array with an object that contains the label, value, id
	// where label is the name of the term
	// where value is the grades of the course on that term
	// and id is the unique id for css
	const terms = [
		{ label: "Prelim:", value: prelim.toFixed(2), id: "PrelimResult" },
		{ label: "Midterm:", value: midterm.toFixed(2), id: "MidtermResult" },
		{
			label: "Prefinal:",
			value: prefinal.toFixed(2),
			id: "PrefinalResult",
		},
		{ label: "Final:", value: final.toFixed(2), id: "FinalResult" },
	];

	// looping through the array in terms 4 times, this will create 4 result
	// that is equivalent to 4 terms from prelim to finals
	// each iteration of loop inside array corresponds to terms
	terms.forEach((term) => {
		const termDiv = document.createElement("div");
		termDiv.className = "terms";

		const termH2 = document.createElement("h2");
		termH2.textContent = term.label; // this will get the name of the terms inside the term array

		const termH3 = document.createElement("h3");
		termH3.id = term.id;
		termH3.textContent = term.value; // this will get the value inside term array

		// making the h2 and h3 the child of the terms(div)
		// making the terms(div) child to the termsAndGrades(div)
		termDiv.appendChild(termH2);
		termDiv.appendChild(termH3);
		termsAndGrades.appendChild(termDiv);
	});

	// creating the over all grade div
	const overAllGrade = document.createElement("div");
	overAllGrade.className = "overAllGrade";
	const overAllh2 = document.createElement("h2");
	overAllh2.textContent = "Overall grade";
	overAllGrade.appendChild(overAllh2);
	const overAllResult = document.createElement("h2");
	overAllResult.id = "overAllResult";
	overAllResult.textContent = overall.toFixed(2);
	overAllGrade.appendChild(overAllResult);


	// creating the remove course button
	const RemoveCourseButton = document.createElement("button");
	RemoveCourseButton.className = "RemoveCourseButton";
	RemoveCourseButton.type = "button";
	RemoveCourseButton.textContent = "Remove Course";
	RemoveCourseButton.onclick = function () {
		removeCourse(elementId);
	};

	resultTable.appendChild(tableTitle);
	resultTable.appendChild(termsAndGrades);
	resultTable.appendChild(overAllGrade);
	resultTable.appendChild(RemoveCourseButton);

	tableWrapper.appendChild(resultTable);
}

// this will remove the item course, also removing it from the array
function removeCourse(elementId) {
	// Find the index of the item with the matching ID
	const index = items.findIndex((item) => item.elementId === elementId);

	// Remove the item if found
	if (index !== -1) {
			items.splice(index, 1); // Remove 1 element at 'index'
	}

	// Remove the DOM element
	const element = document.getElementById(elementId);
	if (element) {
			element.remove();
	}

	console.log("Remaining Items: ", items);

	// Hide result section if no items remain
	if (items.length === 0) {
			document.getElementById("viewResult").style.display = "none";
	}
}

// this function is for cleaning the forms
function clearForms() {
	document.getElementById("courseInput").value = "";
	document.getElementById("courseUnit").value = "";
	document.getElementById("prelimInput").value = "";
	document.getElementById("midtermInput").value = "";
	document.getElementById("prefinalInput").value = "";
	document.getElementById("finalInput").value = "";
	console.log("Item Cleared");
}
