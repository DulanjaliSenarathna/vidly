import http from "./httpService"
import config from '../config.json'
import jwtDecode from 'jwt-decode';

const apiEndpoint = config.apiUrl + '/auth';
const tokenKey = 'token';

http.setJwt(getJwt())// remove bi-directional dependacy

export async function login(email, password){
   const {data: jwt}  = await http.post(apiEndpoint,{email,password});
    localStorage.setItem(tokenKey,jwt);
}

export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey,jwt);
}

export async function logout(){
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
        
      } catch (ex) {
        return null;
      }
}

export function getJwt(){
    return localStorage.getItem(tokenKey);
}

const auth = {
 login,
 logout,
 getCurrentUser,
 loginWithJwt,
 getJwt
};

export default auth;