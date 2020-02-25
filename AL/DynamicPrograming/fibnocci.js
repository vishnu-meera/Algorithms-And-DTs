const fibnocci = number => {
  if (number < 0) return undefined;
  const fibAr = [...Array(number)];

  const fib = n => {
    if (fibAr[n]) return fibAr[n];

    if (n === 0) return 0;
    if (n === 1) return 1;
    fibAr[n] = fib(n - 1) + fib(n - 2);
    return fibAr[n];
  };

  return fib(number);
};

console.log(fibnocci(60));
