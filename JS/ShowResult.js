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
	tableWrapper.className = "tableWrapper";

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
	RemoveCourseButton.id = "RemoveButton";
	RemoveCourseButton.type = "button";
	// RemoveCourseButton.textContent = "Remove";
	RemoveCourseButton.onclick = function () {
		removeCourse(elementId);
	};

	const removeIcon = document.createElement("div");
	removeIcon.className = "remove-Icon";

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("class", "icon-Remove");
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svg.setAttribute("viewBox", "0 0 23 23");
	svg.setAttribute("fill", "none");

	const paths = [
		{
			d: "M19.7143 11.1714C19.7143 15.5266 16.1837 19.0571 11.8286 19.0571C7.47341 19.0571 3.94286 15.5266 3.94286 11.1714C3.94286 6.81627 7.47341 3.28571 11.8286 3.28571C16.1837 3.28571 19.7143 6.81627 19.7143 11.1714Z",
			fill: "#E7C01D",
		},
		{
			d: "M9.39167 8.82449L9.6381 15.9592H10.5417L10.2952 8.82449H9.39167Z",
			fill: "white",
		},
		{
			d: "M11.3905 15.9592H12.2667V8.82449H11.3905V15.9592Z",
			fill: "white",
		},
		{
			d: "M10.7333 7.04082H12.9238V6.26046C12.9238 6.23089 12.9123 6.20254 12.8917 6.18163C12.8712 6.16072 12.8433 6.14898 12.8143 6.14898H10.8429C10.8138 6.14898 10.786 6.16072 10.7654 6.18163C10.7449 6.20254 10.7333 6.23089 10.7333 6.26046V7.04082Z",
			fill: "white",
		},
		{
			d: "M13.1155 15.9592H14.019L14.2655 8.82449H13.3619L13.1155 15.9592Z",
			fill: "white",
		},
		{
			d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM14.019 7.04082H17.0734L17.0857 8.15561H16.1821L15.6326 16.9082C15.6183 17.1343 15.52 17.3465 15.3576 17.5015C15.1953 17.6565 14.981 17.7428 14.7583 17.7429H8.89881C8.67604 17.7427 8.46171 17.6561 8.2994 17.5008C8.1371 17.3455 8.03901 17.1331 8.02508 16.9068L7.475 8.15561H6.57143L6.58375 7.04082H9.6381V5.70306C9.6381 5.5848 9.68425 5.47138 9.76641 5.38775C9.84857 5.30412 9.96 5.25714 10.0762 5.25714H13.581C13.6971 5.25714 13.8086 5.30412 13.8907 5.38775C13.9729 5.47138 14.019 5.5848 14.019 5.70306V7.04082Z",
			fill: "white",
		},
	];

	paths.forEach(({ d, fill }) => {
		const path = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path"
		);
		path.setAttribute("d", d);
		path.setAttribute("fill", fill);
		svg.appendChild(path);
	});

	removeIcon.appendChild(svg);

	const RemoveLabel = document.createElement("h6");
	RemoveLabel.textContent = "Remove";
	removeIcon.appendChild(RemoveLabel);

	RemoveCourseButton.appendChild(removeIcon);

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

export { GenerateResultSection };
