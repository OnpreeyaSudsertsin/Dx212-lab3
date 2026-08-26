/*
// My first JavaScript
console.log("Hello World");
const name = "Dx212";
console.log(name);
const appName = " รอเลย"; // string ( ขอความ)
const passengers = 45; // number ( ตัวเลข)
const isLate = true; // boolean ( จริง/เท็จ)

const routes = ["NGV-1", "NGV-2", "NGV-3"]; // array 
console.log(appName);
console.log(passengers);
console.log(isLate);
console.log(routes);
console.log(routes[0]); // NGV-1

const bus = { // object ( กอนขอมูล)
 route: "NGV-1",
 passengers: 45,
 late: false,
 plateNumber: "กข 4567"
};
// bus.passengers คือ 45
console.log(bus);
console.log(bus.route);
*/

/*
const score = 78;
let grade ;

if (score > 85) {
    grade = "A";
} 
else if (score > 75) {
    grade = "B";
}
else if (score > 65) {
    grade = "C";
}
else if (score > 55) {
    grade = "D";
}
else {
    grade = "F";
}

console.log(`คะแนน ${score} ได้เกรด ${grade}`);
*/

/*
for(let i=0; i <= 100 ; i++) {
    console.log(`${i} Hello`);
}
*/

/*
const students = ["John","Suda","Somchai","Mana","Somsri"];
const scores = [85,46,78,69,99];
function getGrade(score) {
     if(score >70) {
    return "pass";
    } else {
    return "fail";
    }

}

for(let i = 0 ; i < students.length ; i++)
{
    let grade = getGrade(scores[i]);
     console.log(`นักเรียนคนที่ ${i+1} ชื่อ ${students[i]} ได้เกรด ${grade}`);
}
*/


// Part A
const name = "อรปรียา สุดเสริฐสิน";        // string
let age = 20;                    // number
const isStudent = true;          // boolean

const favoriteApps = ["LINE", "TikTok", "Spotify"];   // array
const me = { name: name, age: age, faculty: "CITU" }; // object

console.log(me);
console.log("แอปโปรด:", favoriteApps[1]);

age = age + 1;
console.log("อายุใหม่:", age); // letสามารถเปลี่ยนเลขได้
