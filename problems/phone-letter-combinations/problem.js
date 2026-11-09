const letters = {
  2: "abc", 3: "def", 4: "ghi", 5: "jkl",
  6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz",
};

function validate(digits) {
  if (digits.length === 0) return [];
  const result = [];
  function search(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }
    for (const character of letters[digits[index]]) search(index + 1, current + character);
  }
  search(0, "");
  return result;
}

export { validate };
