import Axios from "axios";
import {toast} from 'react-toastify';

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

  // remove bi-directional dependacy
  function setJwt(jwt){
    Axios.defaults.headers.common['x-auth-token'] = jwt; 
  }

const some ={
    get: Axios.get,
    post: Axios.post,
    put: Axios.put,
    delete: Axios.delete,
    setJwt // remove bi-directional dependacy
  }

  export default some;
  