// const { EventEmitter } = require('events')

// const ev = new EventEmitter()
// // on = ouve sempre 
// // once = uma única vez
// ev.once('saySomething', (message) => {
//     console.log('Eu ouvi vc', message)
// })


// ev.emit('saySomething', "Guilherme")
// ev.emit('saySomething', "Mayk")
// ev.emit('saySomething', "Joao")

// ======================================================


const { inherits } = require('util') // modulo util
const { EventEmitter } = require('events')
// function inherits vai herdar as funcionalidades do EventEmitter para a função Character

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('chapolin')
chapolin.on('help', () => console.log(`Eu!! o ${chapolin.name} Colorado`))
console.log('Oh e agora, quem poderá me defender?')
chapolin.emit('help')