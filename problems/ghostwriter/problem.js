function validate(typed) {
  const text = [];
  for (const character of typed) {
    if (character === "#") text.pop();
    else if (character === "~") {
      if (text.length > 0) text.push(text[text.length - 1]);
    } else text.push(character);
  }
  return text.join("");
}

export { validate };
