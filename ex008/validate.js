function validate(phoneNumber) {
  if (phoneNumber.length > 8 || phoneNumber.length < 7) {
    return false;
  }
  var first = phoneNumber.substring(0, 3);
  var second = phoneNumber.substring(phoneNumber.length - 4);
  if (isNaN(first) || isNaN(second)) {
    return false;
  }
  if (phoneNumber.length === 8) {
    return phoneNumber.charAt(3) === "-";
  }
  return true;
}

console.log(validate("1234567"));

function validate1(phoneNumber) {
  var regex = /^(\d{3}-\d{4}|\d{7})$/;
  return regex.test(phoneNumber);
}

console.log(validate1("1234567"));

function validate2(phoneNumber) {
  return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

console.log(validate1("1234567"));
