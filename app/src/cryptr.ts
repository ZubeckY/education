const AesEncryption = require('aes-encryption')
const aes = new AesEncryption()
aes.setSecretKey('1111241oir1512125hashiuf1251fnf980wpodk1jky128894u128eo290ru32t5328974uh2jg')
export default function decryptData (data: any) {
    return aes.decrypt(data)
}