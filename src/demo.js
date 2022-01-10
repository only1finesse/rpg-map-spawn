class Player {
    constructor(name) {
        this.name = name
        this.hp = 100
        this.attacks = [
            {attack: "SuperSlam", damage: 40},
            {attack: "DropKick", damage: 20},
            {attack: "Punch", damage: 10}
        ]
    }

    attack () {
        const randomAttack = Math.floor(Math.random() * 3)
        return this.attacks[randomAttack]
    }
}



class Monster extends Player {
    constructor(name) {
        super(name, hp)
        this.attacks = [
            {attack: "MonsterPunch", damage: 20}, 
            {attack: "MonsterKick", damage: 20},
            {attack: "CanonBall", damage: 20},
        ]
    }

}

module.exports = {Player, Monster}