export {};

class Person {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name:${this.name}, age:${this.age}`;
  }
}
let taro = new Person('Taro', 26);
console.log(taro.name);
console.log(taro.profile());
// let yamada = new Person();
