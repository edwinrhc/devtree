import mongoose from 'mongoose';
import colors from 'colors';

console.log(process.env.MONGODB_URI);

export const connectDB = async ()  => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.cyan.bold(`MongoDB Conectado ${url}`));
    } catch (error) {
        console.log(colors.bgRed.black.bold(error.message));
        process.exit(1) // Termina el proceso de forma asincrona con un codigo de estado de salida
    }
}

