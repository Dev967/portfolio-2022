import React from 'react';

export const Typo1 = ({text, color='white', fs='3rem', border="2px black", rest}) => {
    return(
        <h3
            style={{
                ...rest,
                fontFamily: 'hacked',
                color: color ,
                fontSize: fs,
                WebkitTextStroke: border,
            }}
        >
            {text}
        </h3>
    )
}