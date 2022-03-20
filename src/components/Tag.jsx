import React from "react";
import { Typo2 } from "./typography/Typo2";

export const Tag = ({text, rest}) => {
    return(
        <div style={{
            borderRadius:'5px',
            padding: '4px',
            boxShadow: '1px 3px 1px 1px black',
            border: '2px solid black',
            backgroundColor: "white",
            ...rest
        }}
        className="tag"
        >
            <Typo2 
            text={text} 
            border="" 
            color="black"
            fs="1.5rem"
            rest={{fontWeight: 'lighter'}}
            />

        </div>
    )
}