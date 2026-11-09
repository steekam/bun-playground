const cases = [
  [
    [["Make Gravy", 10, 11], ["Mash Potatoes", 11, 12], ["Bake Rolls", 11, 13], ["Prep Salad", 12, 13]],
    { count: 3, chosen: ["Make Gravy", "Mash Potatoes", "Prep Salad"] },
  ],
  [[], { count: 0, chosen: [] }],
  [[["Roast", 8, 12], ["Peel", 8, 9], ["Chop", 9, 10]], { count: 2, chosen: ["Peel", "Chop"] }],
  [[["A", 1, 3], ["B", 2, 3]], { count: 1, chosen: ["A"] }],
];

export { cases };
