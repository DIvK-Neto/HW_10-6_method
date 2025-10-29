import { Daemon } from '../daemon.js'

test('Daemon', () => {

    const unit = new Daemon('Mannarot');

    expect(unit.name).toBe('Mannarot');
    expect(unit.type).toBe('Daemon');
    expect(unit.attack).toBe(10);
    expect(unit.defence).toBe(40);
    expect(unit.level).toBe(1);
    expect(unit.health).toBe(100);
})