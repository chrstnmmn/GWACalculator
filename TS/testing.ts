"use strict";

// Initialize variables
let items: string[] = [];
let itemCount: number = 0;

// Compute Grades
function computeOverall() {
	const Percent = {
		microPercent: 0.2,
		macroPercent: 0.4,
	};

	// Retrieve form values with validation
	const CourseDetail = {
		courseName:
			(
				document.getElementById("courseInput") as HTMLInputElement
			)?.value.trim() || "",
		courseUnit: parseFloat(
			(document.getElementById("courseUnit") as HTMLInputElement)
				?.value || "0"
		),
		prelim: parseFloat(
			(document.getElementById("prelimInput") as HTMLInputElement)
				?.value || "0"
		),
		midterm: parseFloat(
			(document.getElementById("midtermInput") as HTMLInputElement)
				?.value || "0"
		),
		prefinal: parseFloat(
			(document.getElementById("prefinalInput") as HTMLInputElement)
				?.value || "0"
		),
		final: parseFloat(
			(document.getElementById("finalInput") as HTMLInputElement)
				?.value || "0"
		),
	};

	// Validation for invalid input
	if (
		!CourseDetail.courseName || // Check for empty course name
		isNaN(CourseDetail.courseUnit) ||
		isNaN(CourseDetail.prelim) ||
		isNaN(CourseDetail.midterm) ||
		isNaN(CourseDetail.prefinal) ||
		isNaN(CourseDetail.final)
	) {
		alert("Invalid Input. Please fill all fields correctly.");
		clearForms();
		return;
	}

	// Compute total grade
	const totalGrade =
		CourseDetail.prelim * Percent.microPercent +
		CourseDetail.midterm * Percent.microPercent +
		CourseDetail.prefinal * Percent.microPercent +
		CourseDetail.final * Percent.macroPercent;

	// Display results
	(document.getElementById("TitleResult") as HTMLElement).innerText =
		CourseDetail.courseName;
	(document.getElementById("PrelimResult") as HTMLElement).innerText =
		CourseDetail.prelim.toFixed(2);
	(document.getElementById("MidtermResult") as HTMLElement).innerText =
		CourseDetail.midterm.toFixed(2);
	(document.getElementById("PrefinalResult") as HTMLElement).innerText =
		CourseDetail.prefinal.toFixed(2);
	(document.getElementById("FinalResult") as HTMLElement).innerText =
		CourseDetail.final.toFixed(2);
	(document.getElementById("overAllResult") as HTMLElement).innerText =
		totalGrade.toFixed(2);

	// Update items
	items.push(CourseDetail.courseName); // Push course name to the array
	itemCount = items.length;
	updateViewVisibility(); // Update view visibility
	clearForms(); // Clear form inputs
}

// Clear Form Inputs
function clearForms() {
	const inputs = document.querySelectorAll<HTMLInputElement>("input");
	inputs.forEach((input) => (input.value = ""));
}

// Remove Course
function removeCourse() {
	if (items.length > 0) {
		items.pop(); // Remove the last item in the array
		itemCount = items.length;
		updateViewVisibility(); // Update visibility based on array length
	} else {
		console.log("No courses left to remove.");
	}
}

// Update Visibility of Results Section
function updateViewVisibility() {
	const viewResult = document.getElementById("viewResult");

	if (viewResult) {
		viewResult.style.display = items.length > 0 ? "flex" : "none";
		viewResult?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center",
		});
	}
}
