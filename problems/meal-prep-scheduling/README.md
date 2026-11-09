# Meal Prep Scheduling

> Given an array of meal prep tasks for Thanksgiving, where each task is
> represented as `[taskName, startTime, endTime]`, return the maximum number of
> non-overlapping tasks you can complete, along with the names of the chosen tasks
> in the order they were selected. Task times are inclusive of start but exclusive
> of end.

```js
maxMealPrepTasks([
  ["Make Gravy", 10, 11],
  ["Mash Potatoes", 11, 12],
  ["Bake Rolls", 11, 13],
  ["Prep Salad", 12, 13],
]);
// { count: 3, chosen: ["Make Gravy", "Mash Potatoes", "Prep Salad"] }
```

Assumption: when several optimal selections exist, take the one produced by
sorting by end time (stable) and picking greedily.

Source: Cassidoo #432 (https://cassidoo.co/newsletter/2025-11-23/). Fidelity: faithful.
Pattern: activity selection, greedy by earliest finish.
