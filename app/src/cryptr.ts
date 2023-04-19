const AesEncryption = require('aes-encryption')
const aes = new AesEncryption()
aes.setSecretKey('1111241oir1512125hashiuf1251fnf980wpodk1jky128894u128eo290ru32t5328974uh2jg')

class cryptr {
    decryptData (data: any) {
        return aes.decrypt(data)
    }

    encryptData (data: any) {
        let value = JSON.stringify(data)
        return aes.encrypt(value)
    }
}



export default new cryptr ()