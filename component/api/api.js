import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://192.168.88.183:8181',
})

// custom truyen token

export default AxiosInstance;