import axios from 'axios';

const loging = (start, limit) => axios.get('/blog/user/login', { params: { start, limit } }).then(res => res.data);

export {
    loging,
};
