import { Zombie } from '../zombie.js'

test('Zombie', () => {

    const unit = new Zombie('Stub');

    expect(unit.name).toBe('Stub');
    expect(unit.type).toBe('Zombie');
    expect(unit.attack).toBe(40);
    expect(unit.defence).toBe(10);
    expect(unit.level).toBe(1);
    expect(unit.health).toBe(100);
})