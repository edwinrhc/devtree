import {Router} from 'express';
import {createAccount} from "./handlers";
// Routing
const router = Router();

/** Autenticacón y registro **/
router.post('/auth/register', createAccount)



export  default router;



