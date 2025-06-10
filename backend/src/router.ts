import {Router} from 'express';
import {body} from 'express-validator';
import {createAccount, getUser, login, updateProfile} from "./handlers";
import {handleInputErrors} from "./middleware/validation";
import {authenticate} from "./middleware/auth";
// Routing
const router = Router();

/** Autenticacón y registro **/
router.post('/auth/register',
    body('handle').notEmpty().withMessage('Handle es requerido'),
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('email').isEmail().withMessage('El correo es requerido'),
    body('password').isLength({min: 8}).withMessage('Password debe tener minimo 8 digitos'),
    handleInputErrors, // Reglas de validacion
    createAccount)

/* Login */
router.post('/auth/login',
    body('email').isEmail().withMessage('El correo es requerido'),
    body('password').notEmpty().withMessage('Password es requerido'),
    handleInputErrors,
    login
)

router.get('/user',
    authenticate,
    getUser)

router.patch('/user',
    body('handle').notEmpty().withMessage('Handle es requerido'),
    body('description').notEmpty().withMessage('Es requerido la descripción'),
    handleInputErrors,
    authenticate,
    updateProfile)

export default router;



