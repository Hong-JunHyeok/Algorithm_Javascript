function solution(...args) {
  let answer = args[0];
  args.forEach((n) => (n < answer ? (answer = n) : null));

  return answer;
}

// solution();
console.log(solution(5, 3, 7, 11, 2, 15, 17));
