import { Router } from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = Router()

const userController = new UserController()

userRouter.post("/", userController.login)
userRouter.post("/", userController.signup)


userRouter.get("/", userController.getAllProfiles)
userRouter.delete("/", userController.deleteUserById)

