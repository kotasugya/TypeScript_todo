export {};

type pitcher1 = {
  speed: Number;
};

type batter = {
  avg: number;
};
type twoWay = pitcher1 & batter;

const markun: pitcher1 = {
  speed: 100,
};

const ichiro: batter = {
  avg: 7.0,
};

const otani = {
  speed: 900,
  avg: 89,
};

console.log(otani);
