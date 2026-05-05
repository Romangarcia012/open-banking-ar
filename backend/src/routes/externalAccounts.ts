import { Router, Request, Response } from 'express';

const router = Router();

// Lista de bancos/fintech soportados disponibles para vinculación
const BANCOS_DISPONIBLES = [
  'banco-nacion',
  'banco-galicia',
  'banco-santander',
  'bbva-argentina',
  'banco-macro',
  'mercado-pago',
  'uala',
  'naranja-x',
  'brubank',
];

// POST /link — inicia sesión de vinculación de cuenta externa
router.post('/link', (req: Request, res: Response) => {
  const { bancoId } = req.body;

  if (!bancoId) {
    res.status(400).json({ error: 'El campo bancoId es requerido' });
    return;
  }

  if (!BANCOS_DISPONIBLES.includes(bancoId)) {
    res.status(400).json({
      error: 'El banco seleccionado no está soportado o no está disponible para vinculación',
    });
    return;
  }

  const sessionId = 'link-session-' + Date.now();

  res.json({
    data: {
      sessionId,
      bancoId,
      oauthUrl: `https://auth.simulado.${bancoId}.com.ar/oauth?session=${sessionId}&redirect=https://open-banking-ar.com/callback`,
      metodo: 'oauth',
      expiraEn: 600,
      instrucciones:
        'Redirigí al usuario a oauthUrl para completar la vinculación. La sesión expira en 10 minutos.',
    },
    message: 'Sesión de vinculación iniciada correctamente',
  });
});

export default router;
