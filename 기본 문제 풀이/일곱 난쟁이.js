function solution(...args) {
  let answer = args;
  let sum = args.reduce((arr, i) => arr + i, 0);

  for (let i = 0; i < args.length - 1; i++) {
    for (let j = 1; j < args.length; j++) {
      if (sum - (args[i] + args[j]) === 100) {
        answer.splice(i, 1);
        answer.splice(j - 1, 1);
      }
    }
  }

  return answer;
}

// solution(20, 7, 23, 19, 10, 15, 25, 8, 13);
console.log(solution(20, 7, 23, 19, 10, 15, 25, 8, 13));
