class WhiteElephantGame {
  constructor(players, choose = (count) => Math.floor(Math.random() * count), maxSteals = 3) {
    this.players = players;
    this.choose = choose;
    this.maxSteals = maxSteals;
    this.holdings = new Array(players).fill(null);
    this.opened = new Array(players).fill(false);
    this.stealCounts = new Array(players).fill(0);
    this.nextPlayer = 0;
    this.victim = null;
    this.stolenGift = null;
  }

  isFrozen(gift) {
    return this.stealCounts[gift] >= this.maxSteals;
  }

  gameOver() {
    return this.holdings.every((gift) => gift !== null);
  }

  finalMessage() {
    const distribution = this.holdings.map((gift, person) => `'person ${person}':${gift}`).join(", ");
    return `Game Over! Final distribution: {${distribution}}`;
  }

  nextMove() {
    if (this.gameOver()) return this.finalMessage();

    const actor = this.victim ?? this.nextPlayer++;
    const blocked = this.victim === null ? null : this.stolenGift;
    const options = [];
    this.opened.forEach((isOpened, gift) => {
      if (!isOpened) options.push({ type: "open", gift });
    });
    this.holdings.forEach((gift, holder) => {
      if (holder === actor || gift === null || gift === blocked || this.isFrozen(gift)) return;
      options.push({ type: "steal", gift, from: holder });
    });

    const move = options[this.choose(options.length)];
    this.holdings[actor] = move.gift;
    if (move.type === "open") {
      this.opened[move.gift] = true;
      this.victim = null;
      return `Person ${actor} opened gift ${move.gift}`;
    }
    this.holdings[move.from] = null;
    this.stealCounts[move.gift] += 1;
    this.victim = move.from;
    this.stolenGift = move.gift;
    return `Person ${actor} stole gift ${move.gift} from person ${move.from}`;
  }
}

function validate([players, picks]) {
  let next = 0;
  const game = new WhiteElephantGame(players, () => picks[next++]);
  const log = [];
  while (!game.gameOver()) log.push(game.nextMove());
  log.push(game.nextMove());
  return log;
}

export { WhiteElephantGame, validate };
