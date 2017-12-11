const FizzBuzz = (a) => {
  if( a === 0) return a;
  if (a % 3 === 0 && a % 5 === 0) return 'FizzBuzz';
  if (a % 3 === 0) return 'Fizz';
  if (a % 5 === 0) return 'Buzz';

  return a;
};

function foo(a) {
  return 'teste';
}

export { FizzBuzz }
