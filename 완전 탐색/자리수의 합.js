function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0,
      temp = x;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  console.log(answer);
  return answer;
}

solution([128, 460, 503, 40, 521, 137, 123]);
// console.log(solution())
