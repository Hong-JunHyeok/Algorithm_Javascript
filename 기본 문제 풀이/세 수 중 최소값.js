function solution(a, b, c) {
  let max = -1;

  if (a > b) {
    max = a;
    if (a < c) {
      max = c;
    }
  } else {
    max = b;
    if (b < c) {
      max = c;
    }
  }

  return max;
}

console.log(solution(2, 5, 1));
