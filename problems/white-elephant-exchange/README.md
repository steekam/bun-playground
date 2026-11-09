# White Elephant Exchange

> Make a white elephant gift exchange class that simulates the game. It should
> generate a sequence of random but valid gift-opening and gift-stealing moves for
> `n` participants, tracks steal counts and frozen gifts, and ends the game when
> everyone has a gift.

```js
const game = new WhiteElephantGame(4);
game.nextMove(); // "Person 0 opened gift 0"
game.nextMove(); // "Person 1 opened gift 1"
game.nextMove(); // "Person 2 stole gift 0 from person 0"
game.nextMove(); // "Person 0 stole gift 1 from person 1"
game.nextMove(); // "Person 1 opened gift 2"
game.nextMove(); // "Person 3 opened gift 3"
game.nextMove(); // "Game Over! Final distribution: {'person 0':1, 'person 1':2, 'person 2':0, 'person 3':3}"
```

Rules inferred from the playthrough: players take their first turn in order, and
the victim of a steal acts next. On a turn you open an unopened gift or steal an
unfrozen gift, but you cannot steal back the gift just taken from you. A gift is
frozen after `maxSteals` steals (default 3, an assumption).

`new WhiteElephantGame(players, choose, maxSteals)`: `choose(count)` returns the
index of the move to play, which makes the game scriptable. `validate([players,
picks])` replays a scripted game and returns the move log.

Source: Cassidoo #383 (https://cassidoo.co/newsletter/2024-12-15/). Fidelity: faithful
(randomness is injectable so it can be tested).
Pattern: stateful simulation with invariants.
