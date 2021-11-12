import {Router} from 'express';
import subjectController from "../controllers/subject.controller";

/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/

const router = Router();
router.get('/todo', subjectController.getSubjects);
router.get('/:id', subjectController.getSubject);
router.post('/newSubject', subjectController.addSubject);
router.post('/newStudent/:subjectName', subjectController.addStudent);

export = router;

