import React from 'react';
import {Typo2} from './typography/Typo2'

export const Button = ({text, rest, onClick, loading, loadingText}) => {
    if(loading) return(
        <button 
        onClick={onClick}
        disabled
        style={{
            width: '7rem',
            height: '2.5rem',
            cursor: 'pointer',
            fontFamily: 'bitwise',
            fontSize: '1.5rem',
            borderRadius: '5px',
            border: '2px solid black',
            boxShadow: '3px 3px 2px black',
            backgroundColor: 'white',
            ...rest
        }}>
            {loadingText}
        </button>
    )
    return(
        <button 
        onClick={onClick}
        style={{
            width: '7rem',
            height: '2.5rem',
            cursor: 'pointer',
            fontFamily: 'bitwise',
            fontSize: '1.5rem',
            borderRadius: '5px',
            border: '2px solid black',
            boxShadow: '3px 3px 2px black',
            backgroundColor: 'white',
            ...rest
        }}>
            {text}
        </button>
    )
}