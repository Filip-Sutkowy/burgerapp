import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-49051.firebaseio.com/'
});


export default instance;