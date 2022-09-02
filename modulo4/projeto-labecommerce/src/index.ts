import {app} from './app';
import registerUser from './endpoint/registerUser';
import getUsers from './endpoint/getUsers';


app.post('/users', registerUser);
app.get('/users', getUsers);