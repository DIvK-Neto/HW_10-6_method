import { Character } from '../class/character.js';

test('create a character with valid parameters', () => {
  const character = new Character('Archer', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Archer',
    type: 'Bowman'
  };
  expect(character).toEqual(correct);
});

test('error for invalid name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
  expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
});

test('error for invalid type', () => {
  expect(() => new Character('Archer', 'InvalidType')).toThrow('Тип должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
});

test('damage to unit', () => {
  const archer = new Character('Archer', 'Bowman', 25, 25);
  const zombie = new Character('Zombie', 'Zombie', 40, 10);
  archer.damage(50);
  zombie.damage(100);
  expect(archer.health).toBe(62.5);
  expect(zombie.health).toBe(10);
});

test('damage to unit with 0 hp', () => {
  const zombie = new Character('Zombie', 'Zombie', 40, 10);
  zombie.health = 0;
  expect(() => zombie.damage(1)).toThrow('юнит мертв');
});

test('levelUp unit', () => {
  const archer = new Character('Archer', 'Bowman', 25, 25);
  archer.damage(50);
  expect(archer.health).toBe(62.5);
  archer.levelUp();
  expect(archer.attack).toBe(30);
  expect(archer.defence).toBe(30);
  expect(archer.health).toBe(100);
  expect(archer.level).toBe(2);
});

test('levelUp dead unit', () => {
  const zombie = new Character('Zombie', 'Zombie', 40, 10);
  zombie.health = 0;
  expect(() => zombie.levelUp()).toThrow('нельзя повысить уровень мертвому юниту');
});