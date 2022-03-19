import React, {useRef, useEffect} from 'react';
import {motion} from 'framer-motion'
import { Typo1 } from './typography/Typo1';
import useOnScreen from './hooks/useOnScreen';

export const Landing = ({}) => {
    return(
        <motion.div style={{
            height: '100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '3rem 1rem 2rem 1rem'}}>
                        <Typo1 text="Hello World" fs={'4rem'} color="black" border='2px white' />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '2rem 1rem 2rem 1rem'}}>
                        <Typo1 
                        text="I am anand and i develop stuff" 
                        fs="4rem" 
                        color="white" 
                        border="2px black" 
                        rest={{textAlign: 'center'}} />
                    </div>
                </div>
        </motion.div>
    )
}