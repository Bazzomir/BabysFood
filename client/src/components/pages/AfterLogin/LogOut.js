import React from 'react';
import { Navigate } from 'react-router';
import { api } from '../../../RESTApi/RestApi';

export default function LogOut() {

    // const user = {
    //     email: email,
    // }

    // fetch(`${api.root}/users/logout`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     },
    //     body: JSON.stringify(user)
    // })
    //     .then(res => res.json()
    //         .then(result => {
    //             alert(` ` + result.message)
    //             dispatch(setLoggedIn(false));
    //             removeUserStorage()
    //             dispatch(setJWT(result.token));
    //             Navigate('/login')
    //         }))
    //     .catch(err => alert(err))

    return (
        <div>
            <h2>Sing Out</h2>
        </div>
    )
}
