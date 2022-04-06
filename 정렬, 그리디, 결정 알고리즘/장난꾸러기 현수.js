function solution(arr) {
  let answer = [];

  const sortedArr = [...arr].sort((a, b) => a - b);
  console.log(sortedArr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i + 1);
  }

  console.log(answer);
  return answer;
}

solution([120, 125, 152, 130, 135, 135, 143, 127, 160]);
