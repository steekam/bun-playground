function validate(text) {
  const stack = [-1];
  let longest = 0;

  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === "(") {
      stack.push(index);
    } else {
      stack.pop();
      if (stack.length === 0) stack.push(index);
      else longest = Math.max(longest, index - stack.at(-1));
    }
  }

  return longest;
}

export { validate };
