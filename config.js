

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6282230196826']
global.ownernomer = "6282230196826"
global.premium = ['6282230196826']
global.packname = 'Sticker  BY BOT RAFFA'
global.author = 'BOT WHATSAPP VIP'
global.sessionName = 'nazedev'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'SELESAI',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'MAAF KAK FITUR INI HANYA BISA UNTUK OWNER KU AJA ',
    group: 'ONLY GROUP ',
    private: 'HANYA UNTUK CHAT PRIBADI/PRIVATE',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'SABAR...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: "infinity"
}
global.thumb = fs.readFileSync('./lib/naze.png')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
