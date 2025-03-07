import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export class MailService {
    private transporter;


    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ro1be2r@gmail.com',
                pass: 'pvlg aknc yqcw xbvx'
            }
        });
    }

    async enviarCorreo(nombre: string, apellido: string, email: string, telefono: string, mensaje: string) {
        const mailOptions = {
            from: email,
            to: 'ro1be2r@gmail.com',
            subject: `WEB-CONTACTO: Recibido de ${nombre}`,
            text: `Nombre: ${nombre} ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`
        };

        try {
            await this.transporter.sendMail(mailOptions);
            return { success: true, message: 'Correo enviado correctamente' };
        } catch (error) {
            console.error('Error enviando correo:', error);
            throw new Error('Error enviando correo');
        }
    }
}
