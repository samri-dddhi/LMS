import express from 'express';
import { loginUser, logoutUser, registrationUser } from '../controllers/user.controller';
import { activateUser } from '../controllers/user.controller';
import { isAuthenticated } from '../middleware/auth';
    
const userRouter = express.Router();

userRouter.post('/registration', registrationUser);
userRouter.post('/activate-user', activateUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', isAuthenticated , logoutUser);

export default userRouter;
