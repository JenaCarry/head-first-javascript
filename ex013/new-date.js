const now = new Date();
console.log(now);

const dateString = now.toDateString();
console.log(dateString);

const theYear = now.getFullYear();
console.log(theYear);

const theDayOfWeek = now.getDay();
// 0 = domingo, 1 = segunda, 3 = terça...
console.log(theDayOfWeek);

const birthday = new Date("July 4, 1999");
console.log(birthday);
