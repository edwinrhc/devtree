
import { CorsOptions } from 'cors'

console.log(process.argv)
export const corsConfig: CorsOptions = {
    origin: function(origin, callback){

        const whiteList = [process.env.FRONTEND_URL]

        //Aqui se ejecuta localmente
        if(process.argv[2] === '--api'){
            whiteList.push(undefined)
        }

        // Aqui se ejecuta con el frontend
        if(whiteList.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error('Error de cors'));
        }
    }
}