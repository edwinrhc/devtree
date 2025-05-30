import type {Request, Response} from 'express'
import {validationResult} from "express-validator";
import slug from 'slug'
import User from "../models/User";
import {hashPassword} from "../utils/auth";


export const createAccount = async (req: Request, res: Response) => {

    //TODO: Manejar errores
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body;

    const userExtis = await User.findOne({email})
    if (userExtis) {
        const error = new Error('El email del usuario ya esta registrado ');
        return res.status(409).json({error: error.message});
    }

    const handle = slug(req.body.handle,'');
    const handleExists = await User.findOne({handle})
    if(handleExists){
        const error = new Error('Nombre de usuario (handle) no disponible');
        return res.status(409).json({error: error.message});
    }

    const user = new User(req.body);
    // Hasheamos el password aqui
    user.password = await hashPassword(password);
    user.handle = handle;


    await user.save();
    // Finalizamos
    res.status(201).send('Registro Creado correctamente');
}



