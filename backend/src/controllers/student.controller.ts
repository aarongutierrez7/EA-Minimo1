import {Request, Response} from 'express';
import Student from '../models/student';

const getStudents = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Student.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getStudent = async (req: Request, res: Response) => {
    try{
        const results = await Student.find({"_id": req.params.id});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}
function newStudent (req: Request, res: Response): void {
    let student = new Student({
        "name" : req.body.name,
        "description" : req.body.description,
        "technologie" : req.body.technologie,
        "date" : req.body.date

    });
    student.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) =>{
        return res.status(500).json(err);
    })
}

export default {getStudent, getStudents, newStudent};