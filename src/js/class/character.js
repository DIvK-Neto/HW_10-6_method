const validTypes = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie"
];

export class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть строкой длиной от 2 до 10 символов.");
    }
    if (!validTypes.includes(type)) {
      throw new Error(`Тип должен быть одним из следующих: ${validTypes.join(", ")}.`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('юнит мертв');
    }
    this.health -= points * (1 - this.defence / 100);
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить уровень мертвому юниту');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }
}