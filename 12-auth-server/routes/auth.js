const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// POST - Crear nuevo usuario
router.post('/new', [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La Contraseña es obligatoria').isLength({min:6}),
        validarCampos
], crearUsuario );

// POST - Login usuario
router.post('/', [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'Contraseña obligatoria').isLength({min:6}),
        validarCampos
], loginUsuario );

// GET - Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken );

module.exports = router;