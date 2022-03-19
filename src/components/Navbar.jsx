import React from 'react';
import {Typo1} from './typography/Typo1'

export const Navbar = ({bg=" linear-gradient(90deg, #FE7070 1.47%, #EF2AA0 98.53%)", border="3px solid black", color="white", fontborder="2px black", text="Anand Parmar"}) => {
    return(
        <div style={{
            border: border,
            width: '100vw',
            height: '70px',
            background: bg,
            position: 'fixed',
            top: 0,
            zIndex: 10
        }}>
            <Typo1 rest={{margin: '10px'}} text={text} fs={"3rem"} color={color} border={fontborder} />
        </div>
    )
}