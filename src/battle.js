const Player = require('./Player/Player')
const Monster = require('./Monster/Monster')
const Map = require('./Map/Map')

let newPlayer = new Player('Brad', 20, { 'punch': 5 })
let newMonster = new Monster('Python', 10, { 'whip': 8 })
let newMap = new Map()

newMap.generateMap()
newMap.generatePlayer()
newMap.generateMonster()

const battle = (map, player, monster) => {
    if (map.collision === true) {
        console.log('=== COLLISION OCCURED      BEGIN GAME ===')
        console.log(map.map)

        while (player.hp > 0 || monster.hp > 0) {
            if (player.hp <= 0) {
                console.log('=== MONSTER WINS ===')
            }
            if (monster.hp <= 0) {
                console.log('=== PLAYER WINS ===')
            }

            let firstMove = Math.floor(Math.random() * 2)

            if (firstMove === 0) {
                monster.hp -= player.attacks['punch']
                console.log(`Player Hits. Monster hp =${monster.hp}`)
            } else {
                player.hp -= monster.attacks['whip']
                console.log(`Monster Hits. Player hp =${player.hp}`)
            }
        }

    } else {
        console.log('=== NO COLLISION      RESTART GAME ===')
    }
}

battle(newMap, newPlayer, newMonster)
// console.log(newPlayer.attacks['punch'])