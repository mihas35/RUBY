const fs = require('fs')
const chalk = require('chalk')

global.owner = [
['79520830782']
]

global.wm = '© CuriosityBot-MD'
global.prefa = '.'
global.session = 'session'
global.vs = '2.0.0'
global.author = 'zam'
global.lolkey = 'GataDiosV3'
global.apis = 'https://delirius-apiofc.vercel.app'

global.mess = {
admin: 'Debes ser administrador para ejecutar esta función',
botAdmin: 'El bot debe ser administrador para ejecutar la función',
owner: 'Solo mi propietario puede hacer uso de este comando',
group: 'Esta función sólo funciona en chats grupales', 
private: 'Esta función sólo funciona en chats privados',
wait: '`Cargando...`'
}

global.link = 'https://whatsapp.com/channel/0029VaB4w2ZFHWpwgyEe3w2k'
global.fotos = 'https://qu.ax/lFTW.jpeg'
global.Title = wm
global.Body = 'Zam'

// IDs de canales
global.ch = {
ch1: '120363336642332098@newsletter',
ch2: '120363160031023229@newsletter',
ch3: '120363169294281316@newsletter',
ch4: '120363203805910750@newsletter',
ch5: '120363302472386010@newsletter',
ch6: '120363301598733462@newsletter',
ch7: '120363190430436554@newsletter',
ch8: '120363374372683775@newsletter', 
ch9: '120363167110224268@newsletter',
ch10: '120363323882134704@newsletter',
ch11: '120363370415738881@newsletter',
ch12: '120363385983031660@newsletter',
ch13: '120363343811229130@newsletter',
ch14: '120363305941657414@newsletter',
}

global.atob = (str) => Buffer.from(str, 'base64').toString('utf-8')
global.btoa = (str) => Buffer.from(str, 'utf-8').toString('base64')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Actualización '${__filename}'`))
delete require.cache[file]
require(file)
})
