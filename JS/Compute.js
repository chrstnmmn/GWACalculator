function computeOverall() {
	const Percent = {
		microPercent: 0.2,
		macroPercent: 0.4,
	};
	const CourseDetail = {
		courseName: document.getElementById("courseInput").value,
		courseUnit: parseFloat(document.getElementById("courseUnit").value),
		prelim: parseFloat(document.getElementById("prelimInput").value),
		midterm: parseFloat(document.getElementById("midtermInput").value),
		prefinal: parseFloat(document.getElementById("prefinalInput").value),
		final: parseFloat(document.getElementById("finalInput").value),
	};

	if (
		isNaN(CourseDetail.prelim) ||
		isNaN(CourseDetail.midterm) ||
		isNaN(CourseDetail.prefinal) ||
		isNaN(CourseDetail.final) ||
		isNaN(CourseDetail.courseUnit)
	) {
		alert("You can only input numeric values!");
		clearForms();
		return; // Exit the function if validation fails
	}

	const ComputeTotal = {
		total1: CourseDetail.prelim * Percent.microPercent,
		total2: CourseDetail.midterm * Percent.microPercent,
		total3: CourseDetail.prefinal * Percent.microPercent,
		total4: CourseDetail.final * Percent.macroPercent,
	};

	const totalGrade =
		ComputeTotal.total1 +
		ComputeTotal.total2 +
		ComputeTotal.total3 +
		ComputeTotal.total4;

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
	clearForms();

	const viewResult = document.getElementById("viewResult");
	viewResult.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
}

function clearForms() {
	document.getElementById("courseInput").value = "";
	document.getElementById("courseUnit").value = "";
	document.getElementById("prelimInput").value = "";
	document.getElementById("midtermInput").value = "";
	document.getElementById("prefinalInput").value = "";
	document.getElementById("finalInput").value = "";
}

function removeCourse() {
	document.getElementById("TitleResult").innerText = "Course or Subject Name";
	document.getElementById("PrelimResult").innerText = "00.00";
	document.getElementById("MidtermResult").innerText = "00.00";
	document.getElementById("PrefinalResult").innerText = "00.00";
	document.getElementById("FinalResult").innerText = "00.00";
	document.getElementById("overAllResult").innerText = "00.00";

	const viewResult = document.getElementById("AddCourse");
	viewResult.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
}