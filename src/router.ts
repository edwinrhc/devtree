import {Router} from 'express';
import User from "./models/User";
// Routing
const router = Router();

/** Autenticacón y registro **/
router.post('/auth/register', async (req,res)=> {
    const user = new User(req.body);
    await user.save();
    // Finalizamos
    res.send('Registro Creado correctamente');
})



export  default router;



