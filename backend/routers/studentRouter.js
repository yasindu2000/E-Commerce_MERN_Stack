import express from "express"
import { getStudents, saveStudents } from "../controllers/studentController";


const studentRouter = express.Router();

studentRouter.get("/" ,getStudents );
studentRouter.post("/" ,saveStudents);


export default studentRouter;