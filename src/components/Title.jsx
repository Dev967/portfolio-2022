import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { Typo1 } from './typography/Typo1';

export const Title = ({text}) => {
    // const [ref, inView] = useInView({
    //     delay: 1000
    // });
    // const control = useAnimation();

    // useEffect(() => {
    //     if(inView){
    //         control.start({
    //             opacity: 1,
    //             x: 0
    //         })
    //     }
    // }, [inView])

    return (
        <motion.div style={
            {
                background: "white",
                border: "3px solid black",
                margin: "5rem 3rem",
                borderRadius: "5px",
                boxShadow: "4px 4px 1px 2px black",
                display: 'flex'
            }
        }>
            <Typo1 text={text} fs="3rem"
                rest={
                    {margin: "1rem"}
                }/>
        </motion.div>
    )
}
