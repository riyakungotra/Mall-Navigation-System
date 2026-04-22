export const paths = {
  entrance: ["corridor1"],

  corridor1: ["entrance", "corridor2", "max"],
  corridor2: ["corridor1", "corridor3", "left1", "right1"],
  corridor3: ["corridor2", "corridor4", "bata", "jockey"],
  corridor4: ["corridor3", "centro"],

  left1: ["corridor2", "left2"],
  left2: ["left1"],

  right1: ["corridor2", "right2"],
  right2: ["right1"],

  max: ["corridor1"],
  bata: ["corridor3"],
  jockey: ["corridor3"],
  centro: ["corridor4"]
};