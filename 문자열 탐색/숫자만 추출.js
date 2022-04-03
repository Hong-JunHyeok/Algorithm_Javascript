function solution(s) {
  s = s.replace(/[^0-9]/g, "");

  return Number(s);
}

console.log(solution("g0en2T0s8eSoft"));
