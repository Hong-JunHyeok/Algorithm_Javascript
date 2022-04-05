function solution(k, arr) {
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let i = k; i < arr.length - k; i++) {
    sum = sum + (arr[i] - arr[i - k]);
    answer = Math.max(answer, sum);
  }

  console.log(answer);

  return answer;
}

solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
