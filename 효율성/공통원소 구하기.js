function solution(a, b) {
  const answer = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) answer.push(a[i]);
    }
  }

  return answer.sort();
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
