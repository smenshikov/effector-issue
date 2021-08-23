import Axios  from 'axios';

const axios = createAxiosInstance();

function createAxiosInstance() {
    return Axios.create({
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function makeGetRequest(url) {
    return axios.get(url).then((res) => ({ data: res.data, status: res.status }));
}

export async function getTodos(){
    return makeGetRequest('https://jsonplaceholder.typicode.com/todos');
}

export async function getTodo(id){
    return makeGetRequest(`https://jsonplaceholder.typicode.com/todos/${id}`);
}