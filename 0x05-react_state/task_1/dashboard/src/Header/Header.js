import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from "aphrodite";


export default function Hader () {
    return (
        <header className={css(styleHeader.hederbg)}>
        <img src={logo} className={css(styleHeader.appLogo)} alt="logo" />
        <h1>School dashboard</h1>
        
      </header>
    )
}

const styleHeader = StyleSheet.create({
  hederbg: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: 'calc(10px + 2vmin)',
    color: 'rgb(235, 86, 86)',
    borderBottom: '3px solid red',

  },
  appLogo: {
    height: '200px',
    pointerEvents: 'none',
  },
})
