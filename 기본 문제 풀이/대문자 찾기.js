function solution(str) {
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      answer += 1;
    }
  }

  return answer;
}

// solution("KoreaTimeGood");
console.log(solution("KoreaTimeGood"));
