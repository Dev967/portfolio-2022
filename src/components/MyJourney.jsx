import React, {useEffect} from 'react';
import { Typo2 } from './typography/Typo2';
import {motion, useAnimation} from 'framer-motion'
import '../Timeline.css';
import { useInView } from 'react-intersection-observer';
import data from "../data/Timeline";
import { Title } from './Title';

export const MyJourney = () => {
    const [ref, isVisible] = useInView({
        threshold: 0.2,
        delay: 100
    });

    const [ref2, inView] = useInView({
        threshold: 0.1,
    });

    const control = useAnimation();
    const control2 = useAnimation();

    useEffect(() => {
        if (isVisible) control.start({
            x: 0
        })
    }, [isVisible, control])

    useEffect(() => {
        if(inView) control2.start({
            x: 0,
            zIndex: 10
        })
    }, [inView, control2])

    return (
        <div ref={ref}>
            <motion.div initial={{x: '-100vw'}} animate={control}>
                <Title text="My Journey..." />
            </motion.div>
        <div 
            style={
                {
                    minHeight: '100vh',
                    maxWidth: '100vw',
                    overflowX: 'visible'
                }
        }>
            <div>
                <div ref={ref2} className="container">
                    <motion.ul className="timeline">
                        {data.map((d, i) => {
                            return(
                        <motion.li key={i} initial={{x: '100vw'}} animate={control2} className="timeline-blocks">
                            <div className="dir-r radius-3" style={{maxWidth: '80vw'}}>
                                <Typo2 text={d.title} rest={{textShadow: "2px 2px black"}} />
                                <Typo2 text={d.name} fs="2.2rem" color="black" border="none" rest={{fontWeight: 'lighter'}} />
                                <Typo2 text={d.date} fs="1rem" border="none" color="black"/>
                                <Typo2 text={d.description}
                                border='none'
                                color='black'
                                fs='1.5rem'
                                rest={{fontWeight: 'lighter', marginTop: '1rem'}}
                                />
                            </div>
                        </motion.li>
                            )
                        })}
                    </motion.ul>
                </div>
            </div>
        </div>
        </div>
    )
}
