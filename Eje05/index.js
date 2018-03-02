var people = Array();
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Israel" + i,
            email: "C" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 === 0 ? true : false //primitivo
        };
        people.push(newPerson);
    }
    newPerson = {
        name: "Flor",
        email: "flmaperezar",
        salary: 1000,
        active: true
    };
}
function valido() {
    for (var i = 0; i < people.length; i++) {
        if (people[i].active && (emailRegex.test(people[i].email))) {
            console.log(people[i]);
        }
    }
}
