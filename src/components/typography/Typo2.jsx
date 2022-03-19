import React from 'react';

export const Typo2 = ({text, color='white', fs='3rem', border="2px black", rest}) => {
    return(
        <h3
            style={{
                ...rest,
                fontFamily: 'bitwise',
                color: color ,
                fontSize: fs,
                WebkitTextStroke: border,
            }}
        >
            {text}
        </h3>
    )
}