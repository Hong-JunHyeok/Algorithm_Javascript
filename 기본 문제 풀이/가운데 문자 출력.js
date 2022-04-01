function solution(str) {
  let answer;
  let strLength = str.length;

  let divLen = parseInt(strLength / 2);
  if (strLength % 2 === 0) {
    answer = str[divLen];
  } else {
    answer = str[divLen] + str[divLen + 1];
  }

  return answer;
}

// solution("study");
console.log(solution("good"));
