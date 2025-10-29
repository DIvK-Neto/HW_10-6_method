import { Swordsman } from '../swordman.js'

test('Swordsman', () => {

    const unit = new Swordsman('Aragorn');

    expect(unit.name).toBe('Aragorn');
    expect(unit.type).toBe('Swordsman');
    expect(unit.attack).toBe(40);
    expect(unit.defence).toBe(10);
    expect(unit.level).toBe(1);
    expect(unit.health).toBe(100);
})