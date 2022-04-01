function solution(...args) {
  const 홀수들 = args.filter((n) => n % 2 !== 0);

  const total = 홀수들.reduce((prev, next) => prev + next, 0);
  const min = Math.min(...홀수들);

  return [total, min];
}

// solution(12, 77, 38, 41, 53, 92, 85);
console.log(solution(12, 77, 38, 41, 53, 92, 85));
