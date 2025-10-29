import { Character } from './character.js'

export class Zombie extends Character {
    constructor(name) {
        const attack = 40;
        const defence = 10;
        const type = 'Zombie';
        super(name, type, attack, defence);

    }
}