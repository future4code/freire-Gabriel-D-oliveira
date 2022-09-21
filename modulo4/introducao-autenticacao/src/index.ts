import app from "./app"
import signUp from "./endpoints/signUp"
import {createUser} from './endpoints/createUser'
import loginUser from "./endpoints/loginUser"
import getUser from "./endpoints/getUser"


app.post('/NewUser', createUser)

app.post('/user/signup', signUp)

app.post('/user/login', loginUser)

app.get('/user/profile', getUser)