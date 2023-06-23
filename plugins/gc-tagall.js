let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐭𝐨𝐝𝐨𝐩𝐞𝐜𝐡𝐨.𝐨𝐟𝐜: ${pesan}`
let teks = `𝐑𝐄𝐕𝐈𝐕𝐀𝐍 𝐁𝐎𝐓𝐒 - 𝐓𝐎𝐃𝐎 𝐏𝐄𝐂𝐇𝐎 𝐁𝐎𝐓 \n\n❏ ${oi}\n❏ 👨🏻‍💻💙𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🔥 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐓𝐎𝐃𝐎 𝐏𝐄𝐂𝐇𝐎 𝐁𝐎𝐓`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
