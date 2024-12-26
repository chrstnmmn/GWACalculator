const microPercent = 0.2;
const macroPercent = 0.4;

function computeOverall() {
	const courseName = document.getElementById("courseInput").value;
	const courseUnit = parseFloat(document.getElementById("courseUnit").value);
	const prelim = parseFloat(document.getElementById("prelimInput").value);
	const midterm = parseFloat(document.getElementById("midtermInput").value);
	const prefinal = parseFloat(document.getElementById("prefinalInput").value);
	const final = parseFloat(document.getElementById("finalInput").value);

	if (isNaN(prelim) || isNaN(midterm) || isNaN(prefinal) || isNaN(final) || isNaN(courseUnit)) {
		alert("You can only input numeric values!");
		return; // Exit the function if validation fails
	}

	const total1 = prelim * microPercent;
	const total2 = midterm * microPercent;
	const total3 = prefinal * microPercent;
	const total4 = final * macroPercent;

	const totalGrade = total1 + total2 + total3 + total4;

	alert("Course name: " + courseName + "\nCourse unit: " + courseUnit + "\nYour average: " + totalGrade);
}
