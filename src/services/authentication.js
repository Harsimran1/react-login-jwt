import cookie from 'react-cookie';
import axios from 'axios';

var AUTH_TOKEN = 'Authorization';

export function isAuthenticated(){
    return cookie.load(AUTH_TOKEN);
}


export function loginAndAuthenticate(email, password){
    var loginData = {
        email: email,
        password: password
    }
    return axios.post('https://i2x-challenge.herokuapp.com/core/login/',loginData).then((res) =>
    {cookie.save(AUTH_TOKEN,res.data.token)})
}

export function getJwtToken(){
    return 'JWT '+ cookie.load(AUTH_TOKEN);
}

export function removeAuthentication(){
    cookie.remove(AUTH_TOKEN);
}



