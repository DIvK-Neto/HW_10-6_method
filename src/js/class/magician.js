import { Character } from './character.js';

export class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
  }
}