import React, {useEffect, useRef} from 'react';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {Card} from './Card'
import data from "../data/skills"
import { Title } from './Title';

export const Skills = ({}) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        delay: 100
    });
    const controls = useAnimation();

    useEffect(() => {
        if(inView){
            controls.start({
                x: 0
            })
        }
    }, [inView])

    return(
        <motion.div ref={ref}>
            <motion.div initial={{x: '-100vw'}} animate={controls}>
                <Title text="I Develop..." />
            </motion.div>
            <div  style={{
            minHeight: '100vh', 
            display: 'flex', 
            flexWrap: "wrap",
            justifyContent: 'space-evenly', 
            alignContent: 'flex-start'
            }}>
            {data.map(d => (
                <Card 
                rest={{margin: '1rem 0.5rem'}} 
                title={d.name} 
                text={d.description}
                tags={d.tags}
                />
                
            ))}
        </div>
        </motion.div>
    )
}