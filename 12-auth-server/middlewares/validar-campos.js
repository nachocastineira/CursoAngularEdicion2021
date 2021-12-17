const { response } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = ( req, res = response, next ) => {

    // si contiene errores retornamos un 400 con el detalle del mismo
    const errors = validationResult( req );
    if ( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    // Si no tenemos ningun error llamamos al next, sin esto quedará esperando respuesta
    next();
}

module.exports = {
    validarCampos
}