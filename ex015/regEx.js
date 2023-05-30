const areaCode = new RegExp(/^[0-9]{3}$/);
const phoneNumber = new RegExp(/^\d{3}-?\d{4}$/);

const code = 382;
console.log(areaCode.test(code));

const num1 = 1234567;
const num2 = "123-4567";
console.log(phoneNumber.test(num1));
console.log(phoneNumber.test("123-4567"));
