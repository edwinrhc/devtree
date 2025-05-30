import {Router} from 'express';
import {body} from 'express-validator';
import {createAccount, login} from "./handlers";
// Routing
const router = Router();

/** Autenticacón y registro **/
router.post('/auth/register',
    body('handle').notEmpty().withMessage('Handle es requerido'),
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('email').isEmail().withMessage('El correo es requerido'),
    body('password').isLength({min:8}).withMessage('Password debe tener minimo 8 digitos'),

    createAccount)

/* Login */
router.post('/auth/login',
    body('email').isEmail().withMessage('El correo es requerido'),
    body('password').notEmpty().withMessage('Password es requerido'),
    login
    )


export default router;



