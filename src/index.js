const jamTerbang = 30000;
const keterangan = jamTerbang > 50000 ? "Senior" : "Junior";
console.log(keterangan); // Masih muda

const kondisiAnd = jamTerbang < 50000 && "Junior"; // Jika kondisi true, akan mereturn "Masih muda"
const kondisiOr = jamTerbang > 50000 || "Senior"; // Jika kondisi false, akan mereturn "Senior"
console.log(kondisiAnd); // Junior
console.log(kondisiOr); // Senior

const listTask = [
    {
        name: "Write for Envato Tuts+ Potter",
        duration: 120
    },
    {
        name: "Work out",
        duration: 60
    },
    {
        name: "Belajar at Eduwork",
        duration: 240
    }
];

const listname = listTask.map((tasks) => tasks.name);
console.log(listname);
// ["Write for Envato Tuts+ Potter", "Work out", "Procrastinate on Duolingo"]

const taskduration = listTask.filter((tasks) => tasks.duration > 60);
console.log(taskduration);
