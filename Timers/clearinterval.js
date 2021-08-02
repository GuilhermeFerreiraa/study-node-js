//  clearInterval irá cancelar uma função N vezes
// depois de X milisegundos

const timeOut = 100
const checking = () => console.log('Verificando..')

let interval = setInterval(checking, timeOut)


setTimeout(() => clearInterval(interval, console.log('\n','Finalizado!')), 5000)
