import type {Request, Response} from 'express'
import User from "../models/User";
import {hashPassword} from "../utils/auth";


export const createAccount = async (req: Request, res: Response) => {

    const {email,password} = req.body;

    const userExtis = await User.findOne({email})
    if (userExtis) {
        const error = new Error('El usuario ya esta registrado ');
        return res.status(409).json({error: error})
    }

    const user = new User(req.body);
   const hash = await hashPassword(password);
    console.log('hash', hash);

    await user.save();
    // Finalizamos
    res.status(201).send('Registro Creado correctamente');
}



