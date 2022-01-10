class Map {
    constructor() {
        this.map = []
        this.collision = false
    }

    //generate map
    generateMap() {
        for (let i = 0; i < 4; i++) {
            let row = [0, 0, 0, 0]
            this.map.push(row)
        }
    }

    //generate player
    generatePlayer() {
        //generate random x,y coordinates
        let pX = Math.floor(Math.random() * 3)
        let pY = Math.floor(Math.random() * 3)

        this.map[pX][pY] = 'p'
    }

    //generate monsters
    generateMonster() {
        let monster = 0

        while (monster < 6) {
            let mX = Math.floor(Math.random() * 4)
            let mY = Math.floor(Math.random() * 4)
            //existing monster? --> skip
            if (this.map[mX][mY] === 'm' || this.map[mX][mY] === 'battle') {
                continue
            }

            //existing player? 
            if (this.map[mX][mY] === 'p') {
                this.collision = true
                this.map[mX][mY] = 'battle'
                // console.log('THERE IS A COLLISION')
                monster++
            } else {
                this.map[mX][mY] = 'm'
                monster++
            }
        }
    }
}


// let testMap = new Map()
// testMap.generateMap()
// testMap.generatePlayer()
// testMap.generateMonster()
// // const generate = () => {
// //     while (testMap.collision === false) {
// //         testMap.generateMonster()
// //         console.log(testMap.map)
// //     }
// // }
// // generate()      
// console.log(testMap.map)

module.exports = Map