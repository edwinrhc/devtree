import type {Request, Response} from 'express'
import User from "../models/User";


export const createAccount = async (req: Request, res: Response) => {

    const {email} = req.body;

    const userExtis = await User.findOne({email})
    if (userExtis) {
        const error = new Error('El usuario ya esta registrado ');
        return res.status(409).json({error: error})
    }
    
    const user = new User(req.body);
    await user.save();
    // Finalizamos
    res.status(201).send('Registro Creado correctamente');
}



