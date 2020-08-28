import axios from 'axios';

const loging = (username, password) => axios.get('/blog/user/login', { params: { start: username, limit: password } }).then(res => res.data);

export {
    loging,
};
