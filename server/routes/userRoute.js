import {registerUser , loginUser, userCredit} from "../controllers/UserController.js";
import express from "express";
import { Router } from "express";
import { userAuth } from "../middleware/auth.js";


const router = Router();

// in this router we will define all the routes related to user authentication and give controller to it

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get("/credits",userAuth, userCredit);


// export this router so we can use it in server.js
export default router;


// when http://localhost:4000/api/user/register is called it will call registerUser function from UserController.js
// when http://localhost:4000/api/user/login is called it will call loginUser function