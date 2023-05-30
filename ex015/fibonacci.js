function fibonacci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

for (let i = 0; i < 10; i++) {
  console.log("The Fibonacci of " + i + " is " + fibonacci(i));
}
