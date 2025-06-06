const name = "krishna"
const repoCount = 60

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);//back ticks (``)

const gamename = new String('kriss')

console.log(gamename[1]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('s'));

const newstring = gamename.substring(0, 3)
console.log(newstring);

const anotherstring = gamename.slice(-5, 2)
console.log(anotherstring);

const namen = "    krishna   "
console.log(namen);
console.log(namen.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replace('=', '-'));
console.log(url.includes('you'));
console.log(url.split('/'));