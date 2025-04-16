import express from 'express'
import { MovieDelete, MovieCreate, MovieIndex, MovieUpdate } from '../controllers/movies.controller.js';


const router = express.Router();


router.get("/", MovieIndex);

router.post("/",MovieCreate);

router.put("/:id",MovieUpdate);

router.delete("/:id",MovieDelete);


export default router