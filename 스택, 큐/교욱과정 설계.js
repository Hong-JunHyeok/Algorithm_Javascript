function solution(pill, plan) {
  const pillQueue = pill.split("");
  const planQueue = plan.split("");

  for (let i = 0; i < planQueue.length; i++) {
    if (planQueue[i] == pillQueue[0]) {
      pillQueue.shift();
    }
  }

  if (pillQueue.length > 0) return "NO";
  else return "YES";
}

console.log(solution("CBA", "CBDGE"));
