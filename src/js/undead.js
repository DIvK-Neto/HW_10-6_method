import { Character } from './character.js'

export class Undead extends Character {
    constructor(name) {
        const attack = 25;
        const defence = 25;
        const type = 'Undead';
        super(name, type, attack, defence);

    }
}