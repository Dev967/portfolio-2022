import React, { useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { Card } from './Card';
import data from "../data/work"
import { Title } from './Title';

export const MyWork = () => {
    const [ref, isVisible]= useInView({
        threshold: 0.2,
        delay: 100
    });
    const control = useAnimation();

    useEffect(() => {
        if(isVisible) control.start({x: 0})
    }, [isVisible, control])
    
    return(
    <div ref={ref}>
        <motion.div animate={control} initial={{x: '-100vw'}}>
            <Title text="My Work..." />    
        </motion.div>
    <div style={{
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent:'space-evenly', 
        alignContent: 'flex-start',
        flexWrap: 'wrap'
        }}>
        {data.map((d, i) => {
            return(
                <Card 
                fontColor='white'
                key={i}
                rest={{margin: "1rem 0.5rem"}}
                // backgroundColor="linear-gradient(180deg, #E20088 0%, #E61788 22.37%, #F36688 100%)"
                backgroundColor="linear-gradient(180deg, #FCBDA1 0%, #F55568 100%)"
                link={d.link}
                title={d.name}
                text={d.description}
                tags={d.tags}
                />
            )
        })}
    </div>
    </div>
    )
}