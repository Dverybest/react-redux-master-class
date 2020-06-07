import {LOGIN_ACTION_KEY} from '../constant';

export const LoginAction = (payload) => (dispatch, getState)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let result ={...payload}
            let date = new Date();
            result.date = date.toDateString();
            result._id = Math.random();
            dispatch({ type: LOGIN_ACTION_KEY, payload: result });
            resolve({success:true})
        }, 3000);
    });
}