import { Undead } from '../undead.js'

test('Undead', () => {

    const unit = new Undead('Lich');

    expect(unit.name).toBe('Lich');
    expect(unit.type).toBe('Undead');
    expect(unit.attack).toBe(25);
    expect(unit.defence).toBe(25);
    expect(unit.level).toBe(1);
    expect(unit.health).toBe(100);
})