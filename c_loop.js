const scores = [72, 88, 95, 60, 81];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];
}
console.log("รวม:", sum, "เฉลี่ย:", sum / scores.length);

// หา max และนับคนที่ได้ > 80
let max = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > max) {
    max = scores[i];
  }
}

let count = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 80) {
    count++;
  }
}

console.log("คะแนนสูงสุด:", max, "คะแนน");
console.log("จำนวนคนที่ได้คะแนน > 80:", count, "คน");