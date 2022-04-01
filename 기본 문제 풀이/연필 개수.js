function solution(n) {
  let das = parseInt(n / 12);
  let rest = n % 12;

  let answer = rest ? das + 1 : das;

  return answer;
}

// solution(25);
console.log(solution(25));
