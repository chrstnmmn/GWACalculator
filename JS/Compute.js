// initializing variables
let items = [];
let itemCount = 0;

// this function will be called to compute the average of the grades from prelim to finals
function computeOverall() {
	// this is the percentage the is going to use as a multiplier
	const Percent = {
		microPercent: 0.2,
		macroPercent: 0.4,
	};

	// getting the value from the user input
	const CourseDetail = {
		courseName: document.getElementById("courseInput").value,
		courseUnit: parseFloat(document.getElementById("courseUnit").value),
		prelim: parseFloat(document.getElementById("prelimInput").value),
		midterm: parseFloat(document.getElementById("midtermInput").value),
		prefinal: parseFloat(document.getElementById("prefinalInput").value),
		final: parseFloat(document.getElementById("finalInput").value),
	};

	// validating if the user is only putting numbers and not strings
	if (
		isNaN(CourseDetail.prelim) ||
		isNaN(CourseDetail.midterm) ||
		isNaN(CourseDetail.prefinal) ||
		isNaN(CourseDetail.final) ||
		isNaN(CourseDetail.courseUnit)
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
		total1: CourseDetail.prelim * Percent.microPercent,
		total2: CourseDetail.midterm * Percent.microPercent,
		total3: CourseDetail.prefinal * Percent.microPercent,
		total4: CourseDetail.final * Percent.macroPercent,
	};
	// after getting the percentage, the next step is getting the sum of all the values
	// the answer is the total average on that course
	const totalGrade =
		ComputeTotal.total1 +
		ComputeTotal.total2 +
		ComputeTotal.total3 +
		ComputeTotal.total4;


	// this will override the labels on the result based on the user input and also the average
	document.getElementById("TitleResult").innerText = CourseDetail.courseName;
	document.getElementById("PrelimResult").innerText =
		CourseDetail.prelim.toFixed(2);
	document.getElementById("MidtermResult").innerText =
		CourseDetail.midterm.toFixed(2);
	document.getElementById("PrefinalResult").innerText =
		CourseDetail.prefinal.toFixed(2);
	document.getElementById("FinalResult").innerText =
		CourseDetail.final.toFixed(2);
	document.getElementById("overAllResult").innerText = totalGrade.toFixed(2);

	// storing the course detail based from the user to the array for data management
	// also this is later gonna be used for computing the overall GWA
	items.push(CourseDetail.courseName);
	for (let i = 0; i < items.length; i++) {
		itemCount = items.length;
		console.log("Item added: " + itemCount);
		console.log(items);

		// if the item inside the array is not emtpy, it will show the result section
		if (itemCount > 0) {
			const viewResult = document.getElementById("viewResult");
			document.getElementById("viewResult").style.display = "flex";
			viewResult.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			});
		}
	}
	clearForms(); // making sure that the forms are clean after getting the input
}

// this will remove the item course, also removing it from the array
function removeCourse() {
	if (items.length != 0) {
		items.pop();
		itemCount = items.length;
		console.log("Item removed: " + itemCount);
		console.log(items);

		// if the item is empty, the values will be reset
		if (items.length == 0) {
			document.getElementById("TitleResult").innerText =
				"Course or Subject Name";
			document.getElementById("PrelimResult").innerText = "00.00";
			document.getElementById("MidtermResult").innerText = "00.00";
			document.getElementById("PrefinalResult").innerText = "00.00";
			document.getElementById("FinalResult").innerText = "00.00";
			document.getElementById("overAllResult").innerText = "00.00";

			const viewResult = document.getElementById("AddCourse");
			viewResult.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "end",
			});

			console.log("Course removed");
			document.getElementById("viewResult").style.display = "none";
		}
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
