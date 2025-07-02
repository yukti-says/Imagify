import express from 'express'
import { generateImage } from '../controllers/ImageController.js'
import {userAuth} from '../middleware/auth.js'

export const imageRouter = express.Router()

// adding userAuth middleware to get id 
imageRouter.post('/generate-image', userAuth, generateImage)

// using this image router in server.js

export default imageRouter