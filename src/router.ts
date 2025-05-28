import {Router} from 'express';
// Routing
const router = Router();

/** Autenticacón y registro **/
router.post('/auth/register', (req,res)=> {
    console.log(req.body);
})



export  default router;



