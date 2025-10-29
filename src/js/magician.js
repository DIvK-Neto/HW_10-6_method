import { Character } from './character.js'

export class Magician extends Character {
  constructor(name) {
    const attack = 10;
    const defence = 40;
    const type = 'Magician';
    super(name, type, attack, defence);

  }
}