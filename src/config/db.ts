import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const url = 'AQUI LA CONEXION'
        const {connection} = await mongoose.connect(url)
        const url2 = `${connection.host}: ${connection.port}`
        console.log(`MongoDB Conectado en ${url2}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1) // Termina el proceso de forma asincrona con un codigo de estado de salida
    }
}

