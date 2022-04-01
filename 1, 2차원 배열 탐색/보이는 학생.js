function solution(...args) {
  let temp = args[0];
  let answer = 1;

  for (let i = 1; i < args.length; i++) {
    if (args[i] > temp) {
      temp = args[i];
      answer += 1;
    }
  }

  return answer;
}

// solution();
console.log(solution(130, 135, 148, 140, 145, 150, 150, 153));
