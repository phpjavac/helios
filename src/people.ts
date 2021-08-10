export interface People {
  money: number;
  age: number;
}

export class PeopleImp implements People {
  constructor(money, age) {
    this.money = money;
    this.age = age;
  }
  money: number;
  age: number;
}

export const generatePeoplsList = (number: number) => {
  const peopleList = new Array(number).fill(0).map(() => {
    const money = Math.random() * 20;
    const age = Math.random() * 100;
    return new PeopleImp(money, age);
  });
  return peopleList;
};
