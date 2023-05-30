var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
  var justAVar = "Just an every day LOCAL";
  function a() {
    return justAVar;
  }
  return a;
}

var b = whereAreYou();
var result = b();
console.log(result);

var justAVar2 = "Oh, don't you worry about it, I'm GLOBAL";
function whereAreYou() {
  var justAVar2 = "Just an every day LOCAL";
  function inner() {
    return justAVar2;
  }
  return inner;
}

var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);
