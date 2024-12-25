let course = {
  courseName:  'Chemistry',
  Prelim: 80.25,
  Midterm: 77.00,
  Prefinal: 76.50,
  Final: 77.38
};

const percent = {
  microPercent: .20,
  macroPercent: .40
};

let result = course.Prelim * percent.microPercent

console.log(result);
