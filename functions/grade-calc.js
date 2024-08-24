const percentageCalc = function (score, total) {
  let grade = "";
  if (typeof score == "number" && typeof total == "number") {
    const percentage = (score / total) * 100;
    if (percentage <= 100 && percentage >= 90) {
      grade = "A";
    } else if (percentage <= 89 && percentage >= 80) {
      grade = "B";
    } else if (percentage <= 79 && percentage >= 70) {
      grade = "C";
    } else if (percentage <= 69 && percentage >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    return grade === "A" || grade === "F"
      ? `${score}/${total}--> You got an ${grade} ${percentage}%`
      : `{score}/${total}--> You got a ${grade} ${percentage}%`;
  } else {
    throw Error("user you must enter good values");
  }
};

try {
  console.log(percentageCalc(true, 23));
} catch (e) {
  console.log(e.message);
}
