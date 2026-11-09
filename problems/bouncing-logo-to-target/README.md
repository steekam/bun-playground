# Bouncing Logo to Target

Simulate a point moving on a `width` by `height` board. It starts at `start`,
moves by velocity `[dx, dy]`, and reverses that component when it hits a wall.
Return the first step at which it reaches `target`, or `-1` when the complete
state repeats first.

Source: Cassidoo #456 (https://cassidoo.co/newsletter/2026-05-10/). Fidelity: adapted. The issue's examples pass a velocity like `[1, 4]` for a diagonal mover, which is underspecified, so this version counts steps and bounces on a wall-reversal model instead of the issue's bounce count.
