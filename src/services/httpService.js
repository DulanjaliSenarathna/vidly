import Axios from "axios";
import {toast} from 'react-toastify';
import auth from './authService'

Axios.defaults.headers.common['x-auth-token'] = auth.getJwt();

Axios.interceptors.response.use(null,error =>{

    const expectedError = 
    error.response && error.response.status >=400
     && error.response.status < 500;
    if(!expectedError){
      console.log('Logging the error', error);
      toast.error('An unexpected error occured');
    } 
    return Promise.reject(error);
  });

const some ={
    get: Axios.get,
    post: Axios.post,
    put: Axios.put,
    delete: Axios.delete
  }

  export default some;
  