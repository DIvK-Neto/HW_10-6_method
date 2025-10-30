import { Magician } from '../class/magician';

test('Правильно создаётся объект', () => {
    const magician = new Magician('Magician');
    const correct = {
        attack: 100,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Magician',
        type: 'Magician'
    };
    expect(magician).toEqual(correct);
});