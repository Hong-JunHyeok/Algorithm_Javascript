function solution(arr) {
  let answer = -1;

  const time_line = [];
  for (let x of arr) {
    time_line.push([x[0], "s"]);
    time_line.push([x[1], "e"]);
  }
  time_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of time_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  console.log(answer);

  return answer;
}

solution([
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);
