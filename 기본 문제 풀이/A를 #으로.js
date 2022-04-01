function solution(str) {
  let answer = [];
  if (typeof str === "string") {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "A") answer.push("#");
      else answer.push(str[i]);
    }
  }

  return answer.join("");
}

// solution("BANANA");
console.log(solution("BANANA"));
