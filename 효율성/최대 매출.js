function solution(k, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let temp = 0;
    for (let j = 0; j < k; j++) {
      temp += arr[i + j];
    }
    answer = Math.max(temp, answer);
  }

  console.log(answer);
  return answer;
}

solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
