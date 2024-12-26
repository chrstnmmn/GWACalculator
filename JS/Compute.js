const microPercent = 0.2;
const macroPercent = 0.4;

const courseName = document.getElementById("courseInput").value;
const courseUnit = document.getElementById("courseUnit").value;
const prelim = document.getElementById("prelimInput").value;
const midterm = document.getElementById("midtermInput").value;
const prefinal = document.getElementById("prefinalInput").value;
const final = document.getElementById("finalInput").value;

function computeOverall(term1, term2, term3, term4) {
	if (isNaN(prelim) || isNaN(midterm) || isNaN(prefinal) || isNaN(final)) {
		console.log("you can only input numeric number!");
	} else {
		parseFloat(prelim, midterm, prefinal, final, courseUnit);

		const total1 = term1 * microPercent;
		const total2 = term2 * microPercent;
		const total3 = term3 * microPercent;
		const total4 = term4 * macroPercent;

		const totalGrade = total1 + total2 + total3 + total4;

		alert("Course name: " + courseName + "\nCourse unit: " + courseUnit + "\nYour average: " + totalGrade);
	}
}