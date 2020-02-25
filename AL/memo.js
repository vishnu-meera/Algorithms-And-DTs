const fib = () => {
  let memo = {};
  return function fibnoci(n) {
    if (n in memo) {
      return memo[n];
    } else {
      if (n <= 1) memo[n] = n;
      else memo[n] = fibnoci(n - 1) + fibnoci(n - 2);
      return memo[n];
    }
  };
};

const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const memoize = cb => {
  let memo = {};

  return (...args) => {
    if (memo[args]) return memo[args];
    else {
      memo[args] = cb(args);
      return memo[args];
    }
  };
};

let factMemo = memoize(factorial);
console.log(factMemo(6));

const partialApply = (fn, ...fixedArgs) => {
  return function(...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};
