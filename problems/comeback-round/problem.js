function validate(rounds) {
  const players = rounds[0]?.length ?? 0;
  const totals = new Array(players).fill(0);
  const history = rounds.map((round) => {
    round.forEach((points, player) => {
      totals[player] += points;
    });
    return [...totals];
  });

  const final = history[history.length - 1] ?? [];
  const best = Math.max(...final);
  if (final.filter((score) => score === best).length !== 1) return -1;
  const winner = final.indexOf(best);

  let earliest = history.length;
  for (let round = history.length - 1; round >= 0; round -= 1) {
    const scores = history[round];
    const soleLeader = scores.every((score, player) => player === winner || score < scores[winner]);
    if (!soleLeader) break;
    earliest = round + 1;
  }
  return earliest;
}

export { validate };
