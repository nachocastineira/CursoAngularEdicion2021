const { response } = require("express");
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async ( req, res = response ) => {

       const { name, email, password } = req.body;

       try {
  
       // Verificar el email
       const usuario = await Usuario.findOne({ email });

       if (usuario) {
           return res.status(400).json({
               ok: false,
               msg: 'El usuario ya existe con ese email'
           });
       }

       // Crear usuario con el modelo
       const dbUser = new Usuario( req.body );

       // Hashear contraseña
       const salt = bcrypt.genSaltSync(10); //genera un codigo random
       dbUser.password = bcrypt.hashSync( password, salt );

       // Generar token (JWT)
       const token = await generarJWT( dbUser.id, name );

       // Crear usuario de BD
       await dbUser.save();

       // Generar respuesta exitosa
       return res.status(201).json({
           ok: true,
           uid: dbUser.id,
           name,
           token
       });

           
       } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: 'Contacte al ADMIN'
            });
       }


        }

//----- 

const loginUsuario = async ( req, res ) => {

    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne({ email });
        if( !dbUser ){
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        }

        // Confirmar si la password hace match
        const validarPassword = bcrypt.compareSync( password, dbUser.password );
        if( !validarPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es válido'
            });
        }

        // Generar el JWT
        const token = await generarJWT( dbUser.id, dbUser.name );

        // Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })

        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Contacte al ADMIN'
    });
    }


}

//----- 

const revalidarToken = async ( req, res = response ) => {

    const { uid, name } = req;

    // Generar el JWT, de nuevo
    const token = await generarJWT( uid, name );
 
        return res.json({
            ok: true,
            uid, 
            name,
            token
        });
    }

//--- exports funciones
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}