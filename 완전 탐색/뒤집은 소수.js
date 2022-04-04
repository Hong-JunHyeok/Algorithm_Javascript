function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) if (n % i === 0) return false;

  return true;
}

function solution(arr) {
  let answer = [];

  const re_arr = arr.map((v) => +String(v).split("").reverse().join(""));

  for (const v of re_arr) {
    if (isPrime(v)) answer.push(v);
  }

  console.log(answer);
  return answer;
}

// solution();
solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
