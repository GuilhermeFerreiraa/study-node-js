//  setInterval irá rodar uma função N vezes
// depois de X milisegundos

const timeOut = 10
const checking = () => console.log('Verificando..')

const timer = setInterval(checking, timeOut)
