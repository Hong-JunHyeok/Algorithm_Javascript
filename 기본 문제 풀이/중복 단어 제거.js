function solution(...strs) {
  return Array.from(new Set(strs));
}

// solution();
console.log(solution("good", "time", "good", "time", "student"));
