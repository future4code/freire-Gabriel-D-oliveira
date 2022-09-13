import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"

app.post('/user/signup', createUser)
app.put('/user/edit', editUser)
app.post('/user/login', login)
app.get('/user/profile', getProfile)

