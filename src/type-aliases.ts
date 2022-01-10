export {};

type Mojiretsu = string;

const foo: string = 'Hello';
const bar: Mojiretsu = 'World';

type example = {
  name: string;
  age: number;
  birthday: number;
};

const profile: example = {
  name: 'kota',
  age: 98,
  birthday: 1995,
};

type example2 = typeof profile;
