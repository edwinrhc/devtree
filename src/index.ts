
import server from './server'


const port =  process.env.PORT || 4000
server.listen(port, () => {
    console.log('Server started on port 4000');
})
