require('dotenv').config()
const config = {
    port:            +envVal("PORT"),
    //data-base
    dbHost:          envVal("DB_HOST"),
    dbName:          envVal("DB_NAME"),
    dbPort:          +envVal("DB_PORT"),
    dbLogin:         envVal("DB_LOGIN"),
    dbPassword:      envVal("DB_PASSWORD"),

    SMTP_USER:      envVal("SMTP_USER"),
    SMTP_HOST:      envVal("SMTP_HOST"),
    SMTP_PORT:      envVal("SMTP_PORT"),
    SMTP_PASSWORD:  envVal("SMTP_PASSWORD"),
    API_URL:        envVal("API_URL"),
}
function envVal(key: string): string {
    let val = process.env[key]
    if (!val) {
        throw new Error("ENV " + key + " not set")
    }
    return val
}

function envValNullable(key: string): string | undefined {
    return process.env[key]
}

export default config
