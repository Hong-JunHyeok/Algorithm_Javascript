function solution(priorities, location) {
  let answer = 0;
  const queue = priorities;

  while (queue.length !== 0) {
    if (location === 0) {
      if (queue.filter((v) => v > queue[0]).length > 0) {
        queue.push(queue.shift());
        location = queue.length - 1;
      } else {
        return answer + 1;
      }
    } else {
      if (queue.filter((v) => v > queue[0]).length > 0) {
        queue.push(queue.shift());
        location--;
      } else {
        queue.shift();
        location--;
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
