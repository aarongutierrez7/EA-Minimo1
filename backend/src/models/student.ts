import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const studentSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    technologie: {
        type: String
    },
    date: {
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface IStudent extends Document {
    name: string;
    description: string;
    technologie: string;
    date: string;

}

//Exportamos modelo para poder usarlo
export default mongoose.model<IStudent>('Student', studentSchema);