import { Character } from './character.js'

export class Bowerman extends Character {
    constructor(name) {
        const attack = 25;
        const defence = 25;
        const type = 'Bowman';
        super(name, type, attack, defence);

    }
}