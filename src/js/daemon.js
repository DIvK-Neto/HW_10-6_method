import { Character } from './character.js'

export class Daemon extends Character {
  constructor(name) {
    const attack = 10;
    const defence = 40;
    const type = 'Daemon';
    super(name, type, attack, defence);

  }
}