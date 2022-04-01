function getMaxNum(a, b, c) {
  let max;
  if (a > b) max = a;
  else answer = b;
  if (answer < c) max = c;

  return max;
}

function solution(a, b, c) {
  let answer;
  const total = [a, b, c].reduce((prev, cur) => prev + cur, 0);

  if (total - getMaxNum(a, b, c) > getMaxNum(a, b, c)) console.log("YES");
  else console.log("NO");

  return answer;
}

solution(13, 33, 17);
