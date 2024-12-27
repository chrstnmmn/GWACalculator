"use strict";
// Initialize variables
let items = [];
let itemCount = 0;
// Compute Grades
function computeOverall() {
    var _a, _b, _c, _d, _e, _f;
    const Percent = {
        microPercent: 0.2,
        macroPercent: 0.4,
    };
    // Retrieve form values with validation
    const CourseDetail = {
        courseName: ((_a = document.getElementById("courseInput")) === null || _a === void 0 ? void 0 : _a.value.trim()) || "",
        courseUnit: parseFloat(((_b = document.getElementById("courseUnit")) === null || _b === void 0 ? void 0 : _b.value) || "0"),
        prelim: parseFloat(((_c = document.getElementById("prelimInput")) === null || _c === void 0 ? void 0 : _c.value) || "0"),
        midterm: parseFloat(((_d = document.getElementById("midtermInput")) === null || _d === void 0 ? void 0 : _d.value) || "0"),
        prefinal: parseFloat(((_e = document.getElementById("prefinalInput")) === null || _e === void 0 ? void 0 : _e.value) || "0"),
        final: parseFloat(((_f = document.getElementById("finalInput")) === null || _f === void 0 ? void 0 : _f.value) || "0"),
    };
    // Validation for invalid input
    if (!CourseDetail.courseName || // Check for empty course name
        isNaN(CourseDetail.courseUnit) ||
        isNaN(CourseDetail.prelim) ||
        isNaN(CourseDetail.midterm) ||
        isNaN(CourseDetail.prefinal) ||
        isNaN(CourseDetail.final)) {
        alert("Invalid Input. Please fill all fields correctly.");
        clearForms();
        return;
    }
    // Compute total grade
    const totalGrade = CourseDetail.prelim * Percent.microPercent +
        CourseDetail.midterm * Percent.microPercent +
        CourseDetail.prefinal * Percent.microPercent +
        CourseDetail.final * Percent.macroPercent;
    // Display results
    document.getElementById("TitleResult").innerText =
        CourseDetail.courseName;
    document.getElementById("PrelimResult").innerText =
        CourseDetail.prelim.toFixed(2);
    document.getElementById("MidtermResult").innerText =
        CourseDetail.midterm.toFixed(2);
    document.getElementById("PrefinalResult").innerText =
        CourseDetail.prefinal.toFixed(2);
    document.getElementById("FinalResult").innerText =
        CourseDetail.final.toFixed(2);
    document.getElementById("overAllResult").innerText =
        totalGrade.toFixed(2);
    // Update items
    items.push(CourseDetail.courseName); // Push course name to the array
    itemCount = items.length;
    updateViewVisibility(); // Update view visibility
    clearForms(); // Clear form inputs
}
// Clear Form Inputs
function clearForms() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
}
// Remove Course
function removeCourse() {
    if (items.length > 0) {
        items.pop(); // Remove the last item in the array
        itemCount = items.length;
        updateViewVisibility(); // Update visibility based on array length
    }
    else {
        console.log("No courses left to remove.");
    }
}
// Update Visibility of Results Section
function updateViewVisibility() {
    const viewResult = document.getElementById("viewResult");
    if (viewResult) {
        viewResult.style.display = items.length > 0 ? "flex" : "none";
        viewResult === null || viewResult === void 0 ? void 0 : viewResult.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    }
}
//# sourceMappingURL=testing.js.map