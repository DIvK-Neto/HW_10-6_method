import { Bowerman } from '../bowerman.js'

test('Bowerman', () => {

  const unit = new Bowerman('Legolas');

  expect(unit.name).toBe('Legolas');
  expect(unit.type).toBe('Bowman');
  expect(unit.attack).toBe(25);
  expect(unit.defence).toBe(25);
  expect(unit.level).toBe(1);
  expect(unit.health).toBe(100);
})