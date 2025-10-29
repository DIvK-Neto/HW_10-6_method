import { Magician } from '../magician.js'

test('Magician', () => {

    const unit = new Magician('Gendalf');

    expect(unit.name).toBe('Gendalf');
    expect(unit.type).toBe('Magician');
    expect(unit.attack).toBe(10);
    expect(unit.defence).toBe(40);
    expect(unit.level).toBe(1);
    expect(unit.health).toBe(100);
})