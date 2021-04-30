import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'GET',
    headers: {
        Authorization: 'Bearer  yourToken'
    }
})

const getPosts = async () => {
    const {data} = await axiosInstance('/users');
    return data;
}

const getPost = async (id) => {
    const {data} = await axiosInstance(`/users/${id}`);
    return data;
}

export {getPosts, getPost};
