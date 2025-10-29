import { Character } from './character.js'

export class Swordsman extends Character {
    constructor(name) {
        const attack = 40;
        const defence = 10;
        const type = 'Swordsman';
        super(name, type, attack, defence);

    }
}