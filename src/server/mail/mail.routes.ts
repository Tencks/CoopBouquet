import { Router } from 'express';
import { MailService } from './mail.service';

const router = Router();
const mailService = new MailService();

router.post('/enviar-correo', async (req, res) => {
    const { nombre, apellido, email, telefono, mensaje } = req.body;

    try {
        const respuesta = await mailService.enviarCorreo(nombre, apellido, email, telefono, mensaje);
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

export default router;
