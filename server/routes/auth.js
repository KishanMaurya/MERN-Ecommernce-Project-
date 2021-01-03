import express from "express"
import { createOrUpdateUser } from "../controller/authController.js"
const router = express.Router();

router.get("/create-or-update-user", createOrUpdateUser) 

export default  router;
