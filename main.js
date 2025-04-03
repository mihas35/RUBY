//Código elaborado por (https://github.com/AzamiJs)

const fs = require('fs')
const axios = require('axios')
const { exec, spawn, execSync } = require('child_process')
const speed = require('performance-now')
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const moment = require('moment')
const gradient = require('gradient-string')
const crypto = require('crypto')
const { format } = require('util')
const Jimp = require('jimp')
const path = require('path')
const fetch = require('node-fetch')
const { performance } = require('perf_hooks')
const osu = require('node-os-utils')
const PhoneNumber = require('awesome-phonenumber')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const FormData = require('form-data') 
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper');
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent,  proto,  generateWAMessageContent, generateWAMessage,  prepareWAMessageMedia,  downloadContentFromMessage,  areJidsSameUser,  getContentType } = require('@whiskeysockets/baileys')
const {  smsg,  getGroupAdmins,  clockString,  sleep,  getBuffer, runtime, fetchJson, isUrl } = require('./lib/func')
require('./settings.js')

const msgs = (message) => {
return message.length >= 10 ? message.substring(0, 500) : message
}

module.exports = client = async (client, m, mesaages, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.message.listResponseMessage && m.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith('.') && m.message.listResponseMessage.singleSelectReply.selectedRowId) ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

m.isBot = m.id.startsWith('Lyru-') || m.id.startsWith('EvoGlobalBot-') && m.id.startsWith('FizzxyTheGreat-') && m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 

/**
 * Returns early if ID starts with 'NJX-' due to Baileys' different generateId system.
 * @param {Object} m - The object containing the ID to check.
 * @returns {void} - Returns early if ID starts with 'NJX-', otherwise continues with the function.
 */
if (m.id.startsWith('NJX-')) return;

var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '' : prefa ?? global.prefix

const command = body.slice(prefix.length).trim().split(/\s+/)[0].toLowerCase()
const args = body.trim().split(/\s+/).slice(1)
const chatContent = (() => {
const messageTypes = { 'conversation': m.message.conversation, 'imageMessage': m.message.imageMessage?.caption, 'documentMessage': m.message.documentMessage?.caption, 'videoMessage': m.message.videoMessage?.caption, 'extendedTextMessage': m.message.extendedTextMessage?.text, 'buttonsResponseMessage': m.message.buttonsResponseMessage?.selectedButtonId, 'templateButtonReplyMessage': m.message.templateButtonReplyMessage?.selectedId, 'listResponseMessage': m.message.listResponseMessage?.singleSelectReply?.selectedRowId, 'messageContextInfo': m.message.listResponseMessage?.singleSelectReply?.selectedRowId }; return messageTypes[m.mtype] || '' })()
const pushname = m.pushName || 'Безымянный'
const text = args.join(' ')
const q = args.join(" ") 
const quoted = m.quoted || m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const isCreator = global.owner.some(([number]) => number.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net' === m.sender)
const isbot = await client.decodeJid(client.user.id)
const sender = m.isGroup ? (m.key.participant || m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(isbot) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAnti = true

const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}}

//Base de datos
let user = global.db.data.users[m.sender]
let chats = global.db.data.chats[m.chat]

let isNumber = x => typeof x === 'number' && !isNaN(x)
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('lenguaje' in user)) user.lenguaje = 'es'
if (!('registered' in user)) user.registered = false

if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!isNumber(user.limit)) user.limit = 20
if(!isNumber(user.premium)) user.premium = false
} else global.db.data.users[m.sender] = { limit: 20 }

if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('welcome' in chats)) chats.welcome = true
if (!('antilink' in chats)) chats.antilink = false
if (!('antifake' in chats)) chats.antifake = false  
if (!('detect' in chats)) chats.detect = true 	
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
welcome: true,
antilink: false,
antifake: false,
detect: true, 	
mute: false
}
let setting = global.db.data.settings[client.user.jid] || {};
if (typeof setting !== 'object') global.db.data.settings[client.user.jid] = {}  
if (setting) {  
if (!isNumber(setting.status)) setting.status = 0  
if (!('self' in setting)) setting.self = false;
if (!('autobio' in setting)) setting.autobio = true
} else global.db.data.settings[client.user.jid] = {  
status: 0,  
self: false,
autobio: true
} 

//console
if (m.message) {
const fecha = chalk.bold.magentaBright(`\nFecha: ${chalk.whiteBright(moment().format('ДД/ММ/ГГЧЧ:мм:сс'))}`)
const mensaje = chalk.bold.greenBright(`\nMensaje: ${chalk.whiteBright(msgs(m.text))}`)
const usuario = chalk.bold.blueBright(`\nUsuario: ${chalk.yellowBright(pushname)}`)
const remitente = chalk.bold.redBright(`\nRemitente: ${gradient('deepskyblue', 'darkorchid')(sender)}`)
const grupo = m.isGroup ? chalk.bold.cyanBright(`\nGrupo: ${chalk.greenBright(groupName)}\nID: ${gradient('violet', 'midnightblue')(from)}`) : chalk.bold.redBright('\nChat privado\n')
console.log(`${fecha}${mensaje}${usuario}${remitente}${grupo}`)
}

//--------------------[ AUTOBIO ]----------------------- 
/*if (global.db.data.settings[client.user.jid].autobio) {
let setting = global.db.data.settings[client.user.jid]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
var timestamp = speed();   
var latensi = speed() - timestamp 
let bio = `${wm} || 💻 ${runtime(process.uptime())} || 👥️ ${Object.keys(global.db.data.users).length}`
try {
await client.updateProfileStatus(bio)
setting.status = new Date() * 1 
} catch {
console.log(latensi.toFixed(4)) 
}}} */

//interactive button
if (m.mtype === 'interactiveResponseMessage') {   
let msg = m.message[m.mtype]  || m.msg
if (msg.nativeFlowResponseMessage && !m.isBot ) { 
let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
if (id) {
let emit = { 
key : { ...m.key } , 
message:{ extendedTextMessage : { text : id } } ,
pushName : m.pushName,
messageTimestamp  : m.messageTimestamp || 754785898978
}
return client.ev.emit('messages.upsert', { messages : [ emit ] ,  type : 'notify'})
}}}

//antilink all
if (global.db.data.chats[m.chat].antilink && groupMetadata) {
let linksProhibidos = {
'телеграмма ': /telegram\.me|t\.me/gi,
'facebook': /facebook\.com/gi,
'whatsapp': /chat\.whatsapp\.com/gi,
'youtube': /youtu\.be|youtube\.com/gi
}
function vl(mensaje, tiposEnlaces) {
for (let tipo of tiposEnlaces) {
if (mensaje.match(linksProhibidos[tipo])) {
return true
}
}
return false
}
let EnlacesProhibidos = ['whatsapp', 'telegram']
if (vl(m.text, EnlacesProhibidos)) {
if (!isBotAdmins) return m.reply('Бот не является администратором, он не может удалять злоумышленников')
let gclink = (`https://chat.whatsapp.com/` + await client.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return client.sendMessage(m.chat, { text: `Ссылка принадлежит *${groupName}*` }, { quoted: m })
if (isAdmins) return client.sendMessage(m.chat, { text: 'Я не могу удалить администратора' }, { quoted: m })
await client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
client.sendMessage(from, { text: `Анти Ссылки\n\n@${m.sender.split('@')[0]} вы отправили запрещенную ссылку`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
client.groupParticipantsUpdate(m.chat, [m.sender], 'удалить')
}
}

//antifake
if (global.db.data.chats[m.chat].antifake && !isAdmins) {
let forbidPrefixes = ['965', '966', '971', '974', '212', '213', '216', '44', '1', '62', '61', '64', '353', '33', '32', '41', '352', '377', '351', '244', '258', '91', '977', '880', '92', '94', '960', '7', '380', '375', '998', '996', '373', '374', '994', '992', '62', '49', '43', '39', '378', '379', '86', '886', '852', '853', '65', '850', '82', '93', '98', '48', '84', '856', '855', '254', '255', '256', '250', '257', '258', '252', '269', '243', '90', '998', '60', '222', '27', '265']
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
await m.reply('*Aнти-фейк* активный')
client.groupParticipantsUpdate(m.chat, [m.sender], 'удалить')}}}
  
switch (prefix && command) {

//Herramientas 
case 'traducir': 
case 'translate': 
case 'tr': {
const translate = require('@vitalets/google-translate-api')
let codesidioma = '🇲🇽 *Español:* es\n🏴 *Welsh:* cy\n🇻🇳 *Vietnamese:* vi\n🇹🇷 *Turkish:* tr\n🇹🇭 *Thai:* th\n🇰🇬 *Tamil:* ta\n🇸🇪 *Swedish:* sv\n🇰🇪 *Swahili:* sw\n🇸🇰 *Slovak:* sk\n🇷🇸 *Serbian:* sr\n🇷🇺 *Russian:* ru\n🇷🇴 *Romanian:* ro\n🇵🇹 *Portuguese:* pt\n🇵🇱 *Polish:* pl\n🇳🇴 *Norwegian:* no\n🇲🇰 *Macedonian:* mk\n🇱🇻 *Latvian:* lv\n🇻🇦 *Latin:* la\n🇰🇷 *Korean:* ko\n🇯🇵 *Japanese:* ja\n🇮🇹 *Italian:* it\n🇮🇩 *Indonesian:* id\n🇮🇸 *Icelandic:* is\n🇭🇺 *Hungarian:* hu\n🇮🇳 *Hindi:* hi\n🇭🇹 *Haitian Creole:* ht\n🇬🇷 *Greek:* el\n🇩🇪 *German:* de\n🇫🇷 *French:* fr\n🇫🇮 *Finnish:* fi\n🇨🇨 *Esperanto:* eo\n🇬🇧 *English:* en\n🇳🇱 *Dutch:* nl\n🇩🇰 *Danish:* da\n🇨🇿 *Czech:* cs\n🇭🇷 *Croatian:* hr\n🇨🇳 *Chinese:* zh\n🇲🇰 *Catalan:* ca\n🇦🇲 *Armenian:* hy\n🇦🇪 *Arabic:* ar\n🇦🇱 *Albanian:* sq\n🇿🇦 *Afrikaans:* af'

if (!args || !args[0]) {
return m.reply('Ingrese el *código* del idioma más el *texto* que desea traducir\n\n`Ejemplo`: .translate ru Hola, ¿cómo estás?')
}

let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'

if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
m.reply('Было обнаружено, что вы не ввели действительный *код* языка*. Будет использоваться язык по умолчанию (испанский).')
}

if (!text && m.quoted && m.quoted.text) text = m.quoted.text

try {
const result = await translate(`${text}`, {to: lang, autoCorrect: true})
await m.reply(`${result.text}`)
} catch {
try {
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkey}&text=${text}`)
const loll = await lol.json()
const result2 = loll.result.translated
await m.reply(`${result2}`)
} catch (e) {
await m.reply('Не удалось выполнить перевод: ' + e)
}}}
break

case 'hd':
case 'remini': 
case 'calidad': {
const FormData = require('form-data') 
const Jimp =  require('jimp')

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!mime) {
return m.reply(`Ответить на *изображение* с помощью этой же * команды* (${prefix + command})`)
}

if (!/image\/(jpe?g|png)/.test(mime)) {
return m.reply(`Недопустимый тип * носителя* `)
}

m.reply('`Загрузка Изображений`') 
try {
let img = await q.download?.()
let pr = await remini(img, 'усилить')
client.sendMessage(m.chat, { image: pr, caption: `Улучшенное качество` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 })
} catch (e) {
return m.reply('Произошла ошибка при попытке улучшить качество изображения:' + e) 
}
}
break

case 'ia': case 'chatgpt': {
if (!text) return m.reply(`Ingrese lo que *desea* preguntar a *ChatGPT*\n\n\`Ejemplo\`: ${prefix + command} ¿Qué es la teología?`)
try {
client.sendPresenceUpdate('composing', from)
let gpt = await fetch(`${apis}/ia/gptweb?text=${text}`) 
let res = await gpt.json()
await await m.reply(res.data)
} catch (e) {
return m.reply('Произошла ошибка при подаче вашего запроса: ' + e)
}}
break

case "deepseek": case "ia3": {
if (!text) return m.reply(`Напишите, что * вы * хотите * спросить * Глубокий взгляд на Кая*\n\n\`Пример\`: ${prefix + command}Что такое теология?`)
client.sendPresenceUpdate('composing', from)
let { data } = await axios.get(`https://archive-ui.tanakadomp.biz.id/ai/deepseek?text=${text}`)
await m.reply(data?.result || '❌Достоверного ответа от DeepSeek AI получено не было.')
}
break

case "gemini": {
if (!text) return m.reply(`Ingrese lo que *desea* preguntar a *Gemini*\n\n\`Ejemplo\`: ${prefix + command} ¿Qué es la teología?`)
client.sendPresenceUpdate('composing', from)
let gpt = await fetch(`https://api.dorratz.com/ai/gemini?prompt=${text}`)
let res = await gpt.json()
await m.reply(res.message)}
break

case "copilot": case "bing": {
if (!text) return m.reply(`Ingrese lo que *desea* preguntar a *copilot*\n\n\`Ejemplo\`: ${prefix + command} ¿Qué es la teología?`)
client.sendPresenceUpdate('composing', from)
let gpt = await fetch(`https://api.dorratz.com/ai/bing?prompt=${text}`)
let res = await gpt.json()
m.reply(res.result.ai_response)}
break

//buscadores
case 'google': case 'googleit': {
const google = require('google-it')
if (!text) return m.reply(`Ingrese algo *relevante* de lo que desea obtener *información*\n\n\`Ejemplo\`: ${prefix + command} Noticias n+`)
try {
const res = await fetch(`https://delirius-apiofc.vercel.app/search/googlesearch?query=${text}`);
const data = await res.json();
    
if (data.status && data.data && data.data.length > 0) {
let teks = `\t\t\t\t\t\t\t *‹* Google Search‘s *›*\n\n`;
for (let result of data.data) {
teks += `*· Título:* ${result.title}\n*· Enlace:* ${result.url}\n*· Descripción:* ${result.description}\n\n─────────────────\n\n`;
}                
client.sendMessage(m.chat, { video: { url: 'https://qu.ax/cPnS.mp4' }, gifPlayback: true, caption: teks }, { quoted: m })
}} catch (error) {
try {
google({ 'query': text }).then(res => {
let teks = `\t\t\t\t\t\t\t *‹* Google Search‘s *›*\n\n`
res.forEach((g, index) => {
teks += `\`${index + 1}\`\n\n`
teks += `*· Título:* ${g.title}\n`
teks += `*· Descripción:* ${g.snippet}\n`
teks += `*· Enlace:* ${g.link}\n\n`
})
client.sendMessage(m.chat, { video: { url: 'https://qu.ax/cPnS.mp4' }, gifPlayback: true, caption: teks }, { quoted: m })
}).catch(err => {
})
} catch (e) {
m.reply('Ha ocurrido un error al realizar la búsqueda: ' + e)
}}}
break

case 'ютуб':
case 'ytsearch': {
if (!text) {
return m.reply('Введите *название* * видео*\n\n`Пример`: .ютуб Любопытство обоих-MD')
}

let ress = await yts(`${text}`)
let armar = ress.all
const Ibuff = await getBuffer(armar[0].image)
let teks2 = armar.map(v => {
switch (v.type) {
case 'видео': return `
Заголовок: *${v.title}* 
Продолжительность: ${v.timestamp}
Повышенный: ${v.ago}
Вид: ${v.views}
Url: ${v.url}
`.trim()
case 'канал': return `
Канал: *${v.name}*
Url: ${v.url}
Подписчики: ${v.subCountLabel} (${v.subCount})
Всего видео: ${v.videoCount}
`.trim()
}
}).filter(v => v).join('\n----------------------------------------\n')
client.sendMessage(m.chat, { image: Ibuff, caption: teks2 }, { quoted: m })
.catch((err) => {
m.reply('Ошибка')
})
}
break

//info
case 'меню':
case 'помощь':
case 'всеменю': {
const texto = `Меню-RUBY

┌  ◦ Информация
│  ◦ ${prefix}сценарий
│  ◦ ${prefix}скорость
└  ◦ Информация

┌  ◦ включить/выключить
│  ◦ ${prefix}включить
│  ◦ ${prefix}выключить
└  ◦ включить/выключить

┌  ◦ Разгрузки
│  ◦ ${prefix}плей
│  ◦ ${prefix}плей аудио
│  ◦ ${prefix}плей видео
└  ◦ Разгрузки

┌  ◦ Группа
│  ◦ ${prefix}админы
│  ◦ ${prefix}группа
│  ◦ ${prefix}понизить
│  ◦ ${prefix}призраки
│  ◦ ${prefix}удалить
│  ◦ ${prefix}ссылка
│  ◦ ${prefix}повысить
│  ◦ ${prefix}вызов
└  ◦ Группа

┌  ◦ Стикеры
│  ◦ ${prefix}с
└  ◦ Стикеры

┌  ◦ Владелец
│  ◦ ${prefix}update
│  ◦ ${prefix}соединять
└  ◦ Владелец`
await client.sendMessage(m.chat, {text: texto, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: 'CuriosityBot', newsletterJid: "120363167110224268@newsletter", }, externalAdReply: { title: `© CuriosityBot-MD`, body: '', thumbnailUrl: 'https://qu.ax/lFTW.jpeg', sourceUrl: 'https://github.com/AzamiJs', mediaType: 1, renderLargerThumbnail: true }}}, {quoted: fkontak})
}
break

case 'скорость': {
const girastamp = speed()
const latensi = speed() - girastamp
const _muptime = process.uptime() * 1000
const muptime = clockString(_muptime)
m.reply(`Время реагирования *${latensi.toFixed(4)}*\n\nВремя безотказной работы *${muptime}*`)
}
break

case 'sc': case 'сценарий': case 'git': {
try {
let res = await fetch('https://api.github.com/repos/AzamiJs/CuriosityBot-MD')
let json = await res.json()
let git = `*乂  Бот  -  сценарий*\n\n· *номер*: ${json.name}\n· *Посетители*: ${json.watchers_count}\n· *Вес*: ${(json.size / 1024).toFixed(2)} MB\n· *Обновленный*: ${moment(json.updated_at).format('ДД/ММ/ГГ - ЧЧ:мм:сс')}\n· *Url* : ${json.html_url}\n\n	   ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues`
await client.sendMessage(m.chat, {text: git, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: 'RUBYBot', newsletterJid: "120363167110224268@newsletter", }, externalAdReply: { title: `© CuriosityBot-MD`, body: '', thumbnailUrl: 'https://qu.ax/lFTW.jpeg', sourceUrl: 'https://github.com/AzamiJs', mediaType: 1, renderLargerThumbnail: true }}}, {quoted: fkontak})
} catch (e) {
m.reply(e)
}
}
break

case 'speedtest': case 'speed': {
const cp = require('child_process') 
const {promisify} = require('util') 
const exec = promisify(cp.exec).bind(cp)
let o
m.reply('> Cargando... 🚀🚀🚀')
try {
o = await exec('python3 speed.py --secure --share')
const {stdout, stderr} = o;
if (stdout.trim()) {
const match = stdout.match(/http[^"]+\.png/)
const urlImagen = match ? match[0] : null
await client.sendMessage(m.chat, {image: {url: urlImagen}, caption: stdout.trim()}, {quoted: m})}
if (stderr.trim()) { 
const match2 = stderr.match(/http[^"]+\.png/)
const urlImagen2 = match2 ? match2[0] : null 
await client.sendMessage(m.chat, {image: {url: urlImagen2}, caption: stderr.trim()}, {quoted: m})
}} catch (e) {
o = e.message
return m.reply(o)
console.log(e)}}
break 

//enable on/off
case 'включить':
case 'выключить': {
if (!m.isGroup) {
return m.reply(mess.group)
}
if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}
if (!isAdmins) {
return m.reply(mess.admin)
}

if (!text) {
let txt = 'Выберите одну из следующих * настроек*'
let listSections = []    
listSections.push({
title: '',
rows: [
{ header: '', title: '🟢| Activar Antilink', id: `.включить антиссылка`, description: `` }, 
{ header: '', title: '🔴| Desactivar Antilink', id: `.выключить антиссылка`, description: `` },
{ header: '', title: '🟢| Activar Antifake', id: `.включить антифейк`, description: `` }, 
{ header: '', title: '🔴| Desactivar Antifake', id: `.выключить антифейк`, description: `` },
{ header: '', title: '🟢| Activar Welcome', id: `.включить приветствие`, description: `` }, 
{ header: '', title: '🔴| Desactivar Welcome', id: `.выключить приветствие`, description: `` }
]})

await client.sendList(m.chat, txt, null, `Configuraciones`, listSections, { mentions: [sender]}, { quoted: fkontak })
return
}

let setting = text.trim().toLowerCase()

switch (setting) {
case 'антиссылка':
if (command === 'включить') {
if (db.data.chats[m.chat].antilink) {
return m.reply('Функция * антиссылка * уже запущена *включена*')
}
db.data.chats[m.chat].antilink = true
m.reply('Функция *антиссылка * была*включена*')
} else if (command === 'выключить') {
if (!db.data.chats[m.chat].antilink) {
return m.reply('функция *антиссылка* уже *выключена*')
}
db.data.chats[m.chat].antilink = false
m.reply('Функция * антиссылка * была * отключена*')
break
}

case 'антифейк':
if (command === 'включить') {
if (db.data.chats[m.chat].antifake) {
return m.reply('функция *антифейк* уже *включена*')
}
db.data.chats[m.chat].antifake = true
m.reply('функция *антифейк* была *включена*')
} else if (command === 'выключить') {
if (!db.data.chats[m.chat].antifake) {
return m.reply('Функция * Антифейк * уже * отключена*')
}
db.data.chats[m.chat].antifake = false
m.reply('Функция * Антифейк * уже * отключена*')
break
}

case 'приветствие':
if (command === 'включить') {
if (db.data.chats[m.chat].welcome) {
return m.reply('Приветственное * сообщение * уже * включено*')
}
db.data.chats[m.chat].welcome = true
m.reply('*Сообщение* Приветствие *включено*')
} else if (command === 'выключить') {
if (!db.data.chats[m.chat].welcome) {
return m.reply('Приветственное * сообщение * уже * отключено*')
}
db.data.chats[m.chat].welcome = false
m.reply('*Сообщение* Приветствие *Отключено*')
break
}

default:
m.reply('Выберите правильный вариант: `антиссылка`, `антифейк`, `приветствие`\n\n- .включить приветствие\n- .выключить приветствие')
break
}
}
break

//descargar
case 'плей': {
const fetch = require('node-fetch')
const { ytmp3, ytmp4 } = require("@hiudyy/ytdl");
const yts = require('yt-search');
const { sanitizeFileName } = require('./lib/func')
if (!text) return m.reply('*Введите заголовок и тип носителя*\nпример: ` воспроизведи звук этих глаз`\n\nСоветы: `аудио`, `видео`');

const [selection, ...queryParts] = text.split(' ');
const query = queryParts.join(' ');
const validSelections = ['аудио', 'видео'];
try {
if (!query) return m.reply('Заголовок видео отсутствует');
if (!validSelections.includes(selection.toLowerCase())) return m.reply(`Недопустимый тип. Используй: ${validSelections.join(', ')}`);
m.reply(mess.wait);
const search = await yts(query);
if (!search.videos.length) return m.reply('Результатов не найдено');
const video = search.videos[0];
const url = video.url;
        
const sendVideoInfo = async () => {
const ytMsg = `*● Заголовок:* ${video.title}\n\n👀 Вид: ${video.views}\n⏳ Продолжительность: ${video.timestamp}\n🌐 Связь: ${url}`;
await client.sendMessage(m.chat, { image: { url: video.thumbnail }, caption: ytMsg }, { quoted: m });
};
await sendVideoInfo();

switch(selection.toLowerCase()) {
case 'аудио': {
try {
const audio = await ytmp3(url);
await client.sendMessage(m.chat, {audio: audio, mimetype: 'аудио/mpeg', fileName: `${sanitizeFileName(video.title)}.mp3`}, { quoted: m });
} catch (e) {
try {  
const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${url}`);
let { data } = await res.json();
await client.sendMessage(m.chat, { audio: { url: data.dl }, mimetype: 'audio/mpeg' }, { quoted: m});
} catch (e) {    
m.reply(e)
}}
break;
}
            
case 'видео': {
try {
const videoData = await ytmp4(url);
await client.sendMessage(m.chat, { 
video: { url: videoData }, mimetype: 'видео/mp4',caption: video.title}, { quoted: m });
} catch (e) {
try {  
const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${url}`);
let { data } = await res.json();
await client.sendMessage(m.chat, { video: { url: data.dl }, fileName: `видео.mp4`, mimetype: 'видео/mp4', caption: video.title }, { quoted: m })
} catch (e) {    
m.reply(e)
}}
break;
}
            
case 'mp3doc': {
const audio = await ytmp3(url);
await client.sendMessage(m.chat, {document: audio, fileName: `${sanitizeFileName(video.title)}.mp3`, mimetype: 'audio/mpeg'}, { quoted: m });
break;
}
            
case 'mp4doc': {
const videoData = await ytmp4(url);
await client.sendMessage(m.chat, {document: videoData, fileName: `${sanitizeFileName(video.title)}.mp4`, mimetype: 'video/mp4' }, { quoted: m });
break;
}}} catch (e) {
console.error('Error:', e);
m.reply(`❌Ошибка при обработке: ${e.message?.split('\n')[0] || 'Проверьте консоль для получения подробной информации'}` + e);
}
}
break;

case 'gitclone': {
const fetch = require('node-fetch')

if (!args[0]) {
return m.reply('Ingrese el enlace de un *repositorio* de *GitHub*\n\n`Ejemplo`: .gitclone https://github.com/AzamiJs/CuriosityBot-MD')
}
if (!args[0].includes('github.com')) {
return m.reply('Enlace no válido. Compruebe el enlace')
}

m.reply(mess.wait)

try {
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let urlGit = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(urlGit, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
client.sendMessage(m.chat, { document: { url: urlGit }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('Ha ocurrido un error al intentar descargar sus archivos: ' + err))
} catch (e) {
return m.reply('Ha ocurrido un error al intentar descargar sus archivos: ' + e) 
}
}
break

case 'tiktok': {
const Tiktok = require('./lib/tiktok')
const tiktok = new Tiktok()
if (!text) return m.reply('Ingrese en enlace de un video de tiktok')
if (args[0] === 'search') {
    const results = await tiktok.search(args.slice(1).join(' '))
    if (results.length === 0) return m.reply('No se encontraron resultados para la consulta proporcionada')
    const text = results.map((result, index) => `\n┌  ◦  Resultado ${index + 1}\n│  ◦ *Título:* ${result.title}\n│  ◦ *Subido:* ${result.creation}\n└  ◦ *Vistas:* ${result.views_count}`).join('\n')
    return m.reply(`Resultados de búsqueda: ${args.slice(1).join(' ')}\n${text}`)
} else if (text) {
    const data = await tiktok.download(text)
    
    const txt = `*· Título:* ${data.title || 'Sin título'}
*· Subido:* ${data.creation}
    
E S T A D O
*· Me gusta* – ${data.like_count}
*· Comentarios* – ${data.comment_count}
*· Compartidas* – ${data.share_count}
*· Vistas* – ${data.views_count}
*· Favoritos* – ${data.favorite_count}
    
    ${global.wm}`
    if (data.media.type === 'image') {
    
    for (const image of data.media.images) {
    await client.sendMessage(m.chat, { image: { url: image }, caption: data.title })
    }
    } else if (data.media.type === 'video') {
    await client.sendMessage(m.chat, { video: { url: data.media.nowatermark.play }, caption: txt }, { quoted: m })
    await client.sendMessage(m.chat, { audio: { url: data.music.play }, mimetype: 'audio/mp4' }, { quoted: m })
    }

} else {
    const region = 'US'
    const trending = await tiktok.tend(region)
    
    const video = trending[Math.floor(Math.random() * trending.length)]
    const txt = `*· Título:* ${video.title || 'Sin título'}
*· Subido:* ${video.creation}
    
E S T A D O
*· Me gusta* – ${video.like_count}
*· Comentarios* – ${video.comment_count}
*· Compartidas* – ${video.share_count}
*· Vistas* – ${video.views_count}
*· Favoritos* – ${video.favorite_count}
    
${global.wm}`
await client.sendMessage(m.chat, { video: { url: video.media.nowatermark }, caption: txt }, { quoted: m })
}}
break

case 'facebook': 
case 'fb': {
const fetch = require('node-fetch')

if (!text) return m.reply('Ingrese un enlace de un *reel* de *Facebook*\n\n`Ejemplo`: .fb https://www.facebook.com/share/r/GB9op9yMyNUmFVH2/?mibextid=V2iOCx')
if (!text.includes('facebook')) return m.reply('Enlace no válido. Compruebe el enlace')
m.reply(mess.wait)
try {
const apiUrl = `https://api.dorratz.com/fbvideo?url=${text}`;
const response = await fetch(apiUrl);
const data = await response.json();
if (data.result) {
const hdUrl = data.result.hd;
const sdUrl = data.result.sd;
const audioUrl = data.result.audio;        
const downloadUrl = hdUrl || sdUrl; 
const caption = `Video de Facebook`
await client.sendMessage(m.chat, { video: { url: downloadUrl }, mimetype: 'video/mp4', fileName: `video.mp4`, caption: caption, mentions: [m.sender], }, { quoted: m })
}} catch (e) {
m.reply('Ha ocurrido un error al descargar su video: ' + e)
}
}
break

case 'instagram':
case 'ig': {
    if (!text) return m.reply('Ingrese un enlace de un *reel* de *Instagram*\n\n`Ejemplo`: .ig https://www.instagram.com/reel/C8Z0mgHuD4d/?igsh=bzE0bGo0eHRxd2dx')
    if (!text.includes('instagram')) return m.reply('Enlace no válido. Compruebe el enlace')
    m.reply(mess.wait)
    try {
        async function ig(a1) {
            const { data: a2 } = await axios.get(atob('aHR0cHM6Ly9zc3NpbnN0YWdyYW0uY29tL21zZWM='))
            const a3 = Math.floor(a2.msec * 1e3) || Date.now()
            const a4 = Date.now() - (a3 ? Date.now() - a3 : 0)
            
            const a5 = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${a1}${a4}${atob('MTllMDhmZjQyZjE4NTU5YjUxODI1Njg1ZDkxN2M1YzllOWQ4OWY4YTVjMWFiMTQ3ZjgyMGY0NmU5NGMzZGYyNg==')}`))
            const a6 = Array.from(new Uint8Array(a5)).map(a7 => a7.toString(16).padStart(2, '0')).join('')
            
            const { data: a8 } = await axios.post(atob('aHR0cHM6Ly9zc3NpbnN0YWdyYW0uY29tL2FwaS9jb252ZXJ0'), {
                url: a1, ts: a4, _ts: 1739186038417, _tsc: Date.now() - a3, _s: a6
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'User-Agent': atob('TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMC4wLjAuMCBTYWZhcmkvNTM3LjM2'),
                    'Referer': atob('aHR0cHM6Ly9zc3NpbnN0YWdyYW0uY29tLw=='),
                    'Origin': atob('aHR0cHM6Ly9zc3NpbnN0YWdyYW0uY29tLw==')
                }
            })

            return a8
        }

        const result = await ig(text)
        const dec = input => Array.isArray(input) ? 'array' : (input && typeof input === 'object' ? 'object' : 'unknown')
        const media = input => input === 'jpg' ? 'image' : input === 'mp4' ? 'video' : false

        if (dec(result) === 'object' && media(result.url[0].type)) {
            const txt = `*· Título:* ${result.meta.title || 'Sin título'}

*· Me gusta* – ${result.meta.like_count}
*· Comentarios* – ${result.meta.comment_count}
*· Creador* – ${result.meta.username}
                
${global.wm}`
            await client.sendMessage(m.chat, { [media(result.url[0].type)]: { url: result.url[0].url }, caption: txt })
        }
    } catch (e) {
        m.reply('Ha ocurrido un error al descargar su solicitud: ' + e.message)
    }
}
break

case 'twiter':
case 'tw':
case 'x': {
const fg = require('api-dylux')

if (!text) {
return m.reply('Ingrese un *enlace* de *X*\n\n`Ejemplo`: .x https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19') 
}
      
try {
let { SD, HD, desc, thumb, audio } = await fg.twitter(text)
await client.sendMessage(m.chat, { video: { url: HD }, caption: `${desc}`}, { quoted: m })
} catch (e) {
m.reply('Ha ocurrido un error al descargar su video de x: ' + e) 
console.log(e)
}
}
break

case 'gdrive':
case 'drive': {
const fg = require('api-dylux')

if (!text) {
return m.reply('Ingrese un *enlace* de *Drive*\n\n`Ejemplo`: .drive https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view')
}

if (!text.includes('drive')) {
return m.reply('El enlace no es válido. Compruebe el enlace')
}

try {
let res = await fg.GDriveDl(text)
client.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
} catch (e) {
m.reply('Ha ocurrido un error al descargar su documento: ' + e)
}
}
break

//grupos
case 'админы': 
case 'admin': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!text) {
return m.reply('Введите свою *причину*, по которой вы хотите, чтобы *администраторы присутствовали*')
}
if (text.length < 10) {
return m.reply('Похоже на короткий мотив')
}

const pp = await client.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://qu.ax/OEgX.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => `\`${i + 1}\` @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

let mensaje = args.join` `
let yo = `Сообщение: ${text}`
let texto = `${yo}

⚠️ Персонал группы ⚠️
${listaAdmins}`.trim()
client.sendMessage(m.chat, { image: { url: pp }, caption: texto, mentions: [...groupAdmins.map(v => v.id), owner]}, { quoted: m })
}
break

case 'группа':
case 'group': 
case 'settings': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}

if (!isAdmins) {
return m.reply(mess.admin)
}

const isClose = { 'открыть': 'не_объявление', 'закрыть': 'объявление', 'abierto': 'not_announcement', 'cerrado': 'announcement', 'abrir': 'not_announcement', 'cerrar': 'announcement', 'desbloquear': 'unlocked', 'bloquear': 'locked' }[(args[0] || '')]
if (isClose === undefined) { 
return m.reply('*Выберите параметр для настройки группы*\n\n`пример`:\n○ открыть группу\n○  группа закрыть\n○ !grupo bloquear\n○ !grupo desbloquear')
}
await client.groupSettingUpdate(m.chat, isClose)
{ m.reply('> Группа настроена правильно') }
}
break

case 'понизить': 
case 'degradar': 
case 'quitaradmin': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}

if (!isAdmins) {
return m.reply(mess.admin)
}

if (isNaN(text) && !text.match(/@/g)){
} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}
if (!text && !m.quoted) {
return m.reply('Отметьте *администратора*, которого вы хотите *понизить в должности*')
}
if (number.length > 13 || (number.length < 11 && number.length > 0)) {
return m.reply('Неверный указанный номер')
}
try {
if (text) {
var User = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var User = m.quoted.sender
} else if (m.mentionedJid) {
var User = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
client.groupParticipantsUpdate(m.chat, [User], 'понизить')
m.reply('>Успешно понижен в должности')
}
}
break

case 'призраки': {
const { areJidsSameUser } = require('@whiskeysockets/baileys')

if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isAdmins) {
return m.reply(mess.admin)
}

let member = participants.map(u => u.id)
if (!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for (let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if (global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
} else {
total++
sider.push(member[i])}}}

if (total == 0) {
return m.reply('Эта группа активна')
}
client.sendMessage(m.chat, { text: `Список неактивных\n${sider.map(v => '· @' + v.replace(/@.+/, '')).join('\n')}`, mentions: sider }) 
}
break

case 'hidetag':
case 'notificar':
case 'tag': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}

if (!isAdmins) {
return m.reply(mess.admin)
}

if (!m.quoted && !text) {
return m.reply('Введите или ответьте на *текст*, чтобы продолжить')
}
try { 
client.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
} catch {  
client.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
}
break

case 'удалить':
case 'kill': 
case 'matar': 
case 'sacar': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}

if (!isAdmins) {
return m.reply(mess.admin)
}

if (!m.mentionedJid[0] && !m.quoted) {
return m.reply('Отметьте или ответьте на сообщение *человека*, которого вы хотите *удалить, или ответьте на него*')
}

let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender

const groupInfo = await client.groupMetadata(m.chat)
const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net'
const ownerBot = global.owner[0][0] + '@s.whatsapp.net'

if (user === client.user.jid) {
return m.reply('Я не могу удалить *бота* из группы')
}

if (user === ownerGroup) {
return m.reply('Я не могу удалить *владельца* из группы')
}

if (user === ownerBot) {
return m.reply('Я не могу удалить *владельца* бота')
}

await client.groupParticipantsUpdate(m.chat, [user], 'удалить')
}
break

case 'ссылка':
case 'enlace': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}
let group = m.chat
let linkk = 'https://chat.whatsapp.com/' + await client.groupInviteCode(group)
client.sendMessage(m.chat, {text: '🚩\v' + linkk }, {quoted: m }, { detectLink: true })
}
break

case 'повысить': 
case 'promover': 
case 'daradmin': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}

if (!isAdmins) {
return m.reply(mess.admin)
}

if (isNaN(text) && !text.match(/@/g)){
} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}
if (!text && !m.quoted) {
return m.reply('Отметьте *пользователя* , которого вы хотите *повысить*')
}
if (number.length > 13 || (number.length < 11 && number.length > 0)) {
return m.reply('Неверный указанный номер')
}
try {
if (text) {
var User = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var User = m.quoted.sender
} else if (m.mentionedJid) {
var User = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
client.groupParticipantsUpdate(m.chat, [User], 'повысить')
m.reply('> Успешно продвинутый пользователь')
}
}
break

case 'вызов': {
if (!m.isGroup) {
return m.reply(mess.group)
}

if (!isBotAdmins) {
return m.reply(mess.botAdmin)
}

if (!isAdmins) {
return m.reply(mess.admin)
}

let teks = `🚩 *Кластер-вызов*\n\n`
teks += `Сообщение: ${q ? q : `Нет сообщения`}\n\n`
for (let mem of participants) {
teks += `- @${mem.id.split('@')[0]}\n`
}
client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break 
		
//propietarios 		
case "backup": {
const archiver = require('archiver');
try {
let d = new Date();
let date = d.toLocaleDateString('fr', {day: 'numeric',
month: 'long',
year: 'numeric'
});

const databaseFolder = './database'; 
const zipPath = './database_backup.zip';
const credsPath = './session/creds.json';

if (!fs.existsSync(databaseFolder)) return await m.reply('⚠️ Папка *database* не существует.');      
if (!fs.existsSync(credsPath)) return await m.reply('⚠️Файл * creds. json* не существует.');      

await m.reply(`_*🗂️ Подготовка отправки базы данных...*_`)

let output = fs.createWriteStream(zipPath);
let archive = archiver('zip', { zlib: { level: 9 } });

output.on('закрыть', async () => {
console.log(`Созданный файл. zip: ${archive.pointer()} bytes`);

let creds = fs.readFileSync(credsPath);
await client.sendMessage(m.sender, {document: fs.readFileSync(zipPath), mimetype: 'application/zip',fileName: `database.zip`}, {quoted: m});
await client.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, {quoted: m});
fs.unlinkSync(zipPath);
});

archive.on('ошибка', (err) => { throw err; });
archive.pipe(output);
archive.directory(databaseFolder, false);
archive.finalize();
} catch (e) {
console.log(e);
await client.sendMessage(m.sender, '❌ Произошла ошибка во время резервного копирования.\n\n' + e, { quoted: m });
}
}
break;

case 'getcase': {
if (!isCreator) {
return m.reply(mess.owner)
}
	
if (!text) {
return m.reply('Ingrese el *comando* que desea obtener *código*\n\n`Ejemplo`: .getcase play')
}

try {
bbreak = 'break'
m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./main.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak)
} catch (e) { 
m.reply('Ha ocurrido un error al obtener el código: ' + e)
} 
}
break

case 'addcase': {
if (!isCreator) {
return m.reply(mess.owner)
}
	
if (!text) {
return m.reply('Введите *код*, который вы хотите добавить, как * команду*')
}

try {
const addcase =[fs.readFileSync('main.js', 'utf8').slice(0, fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('main.js', 'utf8').slice(fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5)].join('\n')
fs.writeFileSync('main.js', addcase)
m.reply(`Comando:\n${text}\nAgregado con éxito.`) 
} catch (e) {
return m.reply('Произошла ошибка при добавлении вашей команды: ' + e)
}
}
break

case 'соединять': 
case 'unete': {
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
const link = m.quoted?.text ?? text
const [_, code] = link.match(linkRegex) || []

if (!code) {
return m.reply('Введите *ссылку* группы, к которой я должен присоединиться')
}
if (isCreator || m.fromMe) {
try {
const result = await client.groupAcceptInvite(code)
m.reply('Я успешно присоединился')
} catch (e) {
m.reply('Произошла ошибка при попытке присоединиться к группе:' + e)
}
}
}
break

case 'update':
case 'actualizar':
case 'gitpull':
if (!isCreator) {
return m.reply(mess.owner)
}

try {
const stdout = execSync('мерзавец тянет' + (m.fromMe && q ? ' ' + q : ''))
let message = stdout.toString()
if (message.includes('Уже в курсе последних событий.')) message = 'Все обновлено'
if (message.includes('Обновление')) message = 'Обновление завершено\n\n' + stdout.toString()
m.reply(message)
} catch (e) {
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('session/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'
}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `Обнаружены локальные изменения в файлах бота, которые конфликтуют с обновлениями репозитория. Чтобы выполнить обновление, переустановите бота или выполните обновления вручную\n\n конфликтные файлы:\n\n${conflictedFiles.join('\n')}`
await m.reply(errorMessage)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = 'Произошла ошибка'
if (error.message) {
errorMessage2 += '\nСообщение об ошибке: ' + error.message
}
await m.reply(errorMessage2)
}
}
break

//sticker
case 'с': case 'стикер': {
const d = new Date(new Date + 3600000)
const locale = 'es-ES'
const dias = d.toLocaleDateString(locale, {weekday: 'long'})
const fecha = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'})

let sticker2 = `${wm}\nАвтор:\nFecha:\nDía:\nCreador:`
let sticker3 = `${vs}\n${pushname}\n${fecha}\n${dias}\nМихаил`

if (/изображение/.test(mime)) {
media = await quoted.download()  
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: sticker2, author: sticker3, contextInfo: {forwardingScore: 9999999, isForwarded: true, externalAdReply:{ showAdAttribution: false, title: wm, mediaType: 2, sourceUrl: 'https://github.com/AzamiJs', thumbnailUrl: 'https://qu.ax/lFTW.jpeg'}}})
await fs.unlinkSync(encmedia)  
} else if (/видео/.test(mime)) {
if ((quoted.msg || quoted).seconds > 20) {
return m.reply('Видео не может быть очень длинным')
}
media = await quoted.download()

let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: sticker2, author: sticker3, contextInfo: {forwardingScore: 9999999, isForwarded: true, externalAdReply:{ showAdAttribution: false, title: wm, mediaType: 2, sourceUrl: 'https://github.com/AzamiJs', thumbnailUrl: 'https://qu.ax/lFTW.jpeg'}}})
await new Promise((resolve) => setTimeout(resolve, 2000))
await fs.unlinkSync(encmedia)  
} else {
m.reply('Ответьте на *изображение* или *видео*')
}
}
break

function ucapan() {
const time = moment.tz('America/Mexico_City').format('HH')
if (time >= 17) {
return 'Buenas noches'
} else if (time >= 15) {
return 'Buenas tardes'
} else if (time >= 11) {
return 'Buenas tardes'
} else if (time >= 4) {
return 'Buenos días'
} else {
return 'Buenas madrugadas'
}
}

async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) throw 'ID Not Found'
const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'}})
const { fileName, sizeBytes, downloadUrl } = JSON.parse((await res.text()).slice(4))
if (!downloadUrl) throw 'Link Download Limit!'
const data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')}
}
		
async function remini(imageData, operation) {
return new Promise(async (resolve, reject) => {
const availableOperations = ['enhance', 'recolor', 'dehaze']
if (availableOperations.includes(operation)) {
operation = operation
} else {
operation = availableOperations[0]
}
const baseUrl = 'https://inferenceengine.vyro.ai/' + operation + '.vyro'
const formData = new FormData()
formData.append('image', Buffer.from(imageData), {filename: 'enhance_image_body.jpg', contentType: 'image/jpeg'})
formData.append('model_version', 1, {'Content-Transfer-Encoding': 'binary', contentType: 'multipart/form-data; charset=utf-8'})
formData.submit({url: baseUrl, host: 'inferenceengine.vyro.ai', path: '/' + operation, protocol: 'https:', headers: {'User-Agent': 'okhttp/4.9.3', Connection: 'Keep-Alive', 'Accept-Encoding': 'gzip'}},
function (err, res) {
if (err) reject(err)
const chunks = []
res.on('data', function (chunk) {chunks.push(chunk)})
res.on('end', function () {resolve(Buffer.concat(chunks))})
res.on('error', function (err) {
reject(err)
})},)})}
		
default:
     
if (budy.startsWith('>')) {
    if(!isCreator) return
    let evan
    let text = /await|return/gi.test(budy) ? `(async () => { ${budy.slice(1)} })()` : `${budy.slice(1)}`
    try {
        evan = await eval(text)
    } catch (e) {
        evan = e
    } finally {
        client.sendMessage(m.chat, { text: format(evan)})
    }
}
		
}
} catch (zam) {
console.log(zam)
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright(`\n\nЯ обновляю файл ${__filename}`))
delete require.cache[file]
require(file)
})
