import React, { useEffect } from 'react';
import {motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { Typo2 } from './typography/Typo2';
import { Tag } from './Tag';

export const Card = ({
    width='25rem', 
    titleSize="3rem",
    height='17rem', 
    backgroundColor='white', 
    borderRadius='6px', 
    border='3px solid black', 
    title="",
    text="",
    rest,
    tags,
    fontColor="white ",
    link
    }) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView){
            controls.start({
                y: 0
            })
        }
    }, [inView, controls])

    return(
        <motion.div
        ref={ref}
        initial={{y: 400}}
        transition={{duration: 0.3, ease: "backInOut"}}
        animate={controls}
        style={{
            ...rest,
            width: width, 
            height: height, 
            background: backgroundColor,
            borderRadius: borderRadius,
            border: border,
            boxShadow: '5px 5px 3px black',
            cursor: link ? "pointer" : 'initial',
        }}
        onClick={() => {
            if(link)  window.open(link, "_blank")
        }}
        className="card">
                <div style={{height: '5rem', margin: 'auto auto'}}>
                    <Typo2 fs={titleSize} color={fontColor} border="2px black" text={title} rest={{textAlign: 'center', marginTop: "1rem"}}/>
                </div>

                <div style={{height: '7rem', padding: "0 3px" }}>
                    <Typo2 fs="1.8rem" border="0px solid white" color="black" rest={{textAlign: 'center', marginTop: '1rem', fontWeight: 'lighter'}} text={text} />
                </div>
                {tags && (
                <div 
                className="tags" 
                style={{
                    display:'flex', 
                    justifyContent: 'space-evenly', 
                    alignItems: 'center'
                    }}>
                    {tags.map((t, i) => (
                        <Tag key={i} text={t} />
                    ))}
                </div>
                )}
        </motion.div>
    )
}