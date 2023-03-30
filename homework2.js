const hockeyTeam = 'Hawks';
let rank = 12;
let qualified = true;
let sponsor = null;
let currentPlacing;
console.log('Team name = ' + hockeyTeam);
console.log("Global rank = " + rank);
console.log("Qualified for games = " + qualified);
console.log("Sponsor = " + sponsor);
console.log("Current season rank = " + currentPlacing);

let vehicle = {};
vehicle.brandName = 'Audi';
vehicle.model = 'A4';
vehicle['model'] = 'S4';
console.log(vehicle);
delete vehicle.model;
console.log(vehicle);

let salaries = {
    kim: 1000,
    ten: 500,
    pak: 200,
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);