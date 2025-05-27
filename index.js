
import  express from 'express' // ESM EcmasSCRIPT MODULE

const app = express();

// Routing
app.get('/',(req,res) => {
    res.send('Hola mundo en express')
})

app.get('/ecommerce', (req,res) => {
    res.send('Este es el Ecommerce')
})

const port =  process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server started on port 4000');
})
