import config from "../helpers/config";
const nodemailer = require('nodemailer');

export class MailService {
    private transporter = nodemailer.createTransport({
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        secure: false,
        auth: {
            user: config.SMTP_USER,
            pass: config.SMTP_PASSWORD
        }
    })

        // Активация аккаунта
    async activationAccount (to:string, link:string) {
        try {
            await this.transporter.sendMail({
                from: config.SMTP_USER,
                to,
                subject: 'Активация аккаунта на ' + config.API_URL,
                text: '',
                html:
                    `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `,
            })
        } catch (e) {

        }
    }

    async forgotPassword (to:string, link:string) {
        try {
            await this.transporter.sendMail({
                from: config.SMTP_USER,
                to,
                subject: 'Сброс пароля',
                text: '',
                html:
                    `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
            })
        } catch (e) {

        }
    }



}
