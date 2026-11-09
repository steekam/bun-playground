function containedItemsInRanges(layout, ranges) {
  const itemsBefore = [0];
  const nextWall = new Array(layout.length + 1).fill(Infinity);
  const previousWall = new Array(layout.length).fill(-Infinity);

  layout.split("").forEach((character, index) => {
    itemsBefore.push(itemsBefore[index] + (character === "*" ? 1 : 0));
    previousWall[index] = character === "|" ? index : (previousWall[index - 1] ?? -Infinity);
  });
  for (let index = layout.length - 1; index >= 0; index -= 1) {
    nextWall[index] = layout[index] === "|" ? index : nextWall[index + 1];
  }

  return ranges.map(([start, end]) => {
    if (end <= start) return 0;
    const left = nextWall[start];
    const right = previousWall[end - 1];
    return left < right ? itemsBefore[right] - itemsBefore[left] : 0;
  });
}

function validate([layout, start, end]) {
  return containedItemsInRanges(layout, [[start, end]])[0];
}

export { containedItemsInRanges, validate };
