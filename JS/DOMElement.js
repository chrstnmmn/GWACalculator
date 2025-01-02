// Global variables

function userInputValue() {
	// getting the value from the user input
	return {
		courseName: document.getElementById("courseInput").value,
		courseUnit: parseFloat(document.getElementById("courseUnit").value),
		prelim: parseFloat(document.getElementById("prelimInput").value),
		midterm: parseFloat(document.getElementById("midtermInput").value),
		prefinal: parseFloat(document.getElementById("prefinalInput").value),
		final: parseFloat(document.getElementById("finalInput").value),
	};
}

export { userInputValue };
