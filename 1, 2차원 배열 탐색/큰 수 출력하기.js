function solution(...args) {
  const answer = [];
  answer.push(args[0]);
  for (let i = 1; i < args.length; i++) {
    if (args[i] > args[i - 1]) {
      answer.push(args[i]);
    }
  }

  return answer;
}

// solution(7, 3, 9, 5, 6, 12);
console.log(solution(7, 3, 9, 5, 6, 12));
