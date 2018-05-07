import axios from 'axios';

const API = 'localhost:5000/';

// export const SIGNIN = 'signIn';

export function signUpUser(values) {
    return (dispatch) => {
        axios.post(`${API}signup`, {
            email: values.email,
            password: values.password
        }).then(val => console.log(val));
    }

}