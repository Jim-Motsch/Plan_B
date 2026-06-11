const idArray = [
    { id: "511168", name: "John", date: "2023", model: "2120" },
    { id: "511169", name: "Joh", date: "2023", model: "2120" },
    { id: "511170", name: "Jo", date: "2024", model: "2120" },
    { id: "511171", name: "J", date: "2024", model: "2120" },
    { id: "511172", name: "Dan", date: "2024", model: "2120" }
];
const call = process.argv[2];
for (const device of idArray) {
    if (call === device.id) {
        console.log(device);
        process.exit(0);
    }
}
console.log("Not found in database!");
