export {};

function double(value: number): number;
function double(value: string): string;
function double(value: boolean): string;

function double(value: any): any {
  if (typeof value === 'number') value * 2;
  console.log(typeof value);
  if (typeof value === 'boolean') console.log('hoge');
  else value + value;
}

console.log(double(100));
console.log(double('Go'));
console.log(double(true));
