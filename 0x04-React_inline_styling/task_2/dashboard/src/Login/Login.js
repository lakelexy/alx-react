import React from 'react';
import { StyleSheet, css } from "aphrodite";

export default function Login () {
    return (
        <body className={css(styleLogin.appbody)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input className={css(styleLogin.inputlogin)} type="email" name="email" id="email"></input>
            <label htmlFor="password">Password:</label>
            <input className={css(styleLogin.inputlogin)} type="password" name="password" id="password"></input>
            <button>OK</button>
      </body>
    );
}

const styleLogin = StyleSheet.create({
    appbody: {
        textAlign: 'left',
        margin: '50px'
    },

    inputlogin: {
        marginRight: 10,
    },
})
