import {motion} from 'framer-motion'
import { Typo1 } from './typography/Typo1';

export const Landing = () => {
    return(
        <div style={{
            height: '100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <div>
                    <motion.div
                    initial={{x: "100vw"}}
                    animate={{x: 0}}
                    style={{display: 'flex', justifyContent: 'center', margin: '3rem 1rem 2rem 1rem'}}>
                        <Typo1 text="Hello World" fs={'4rem'} color="black" border='2px white' rest={{textAlign: 'center'}} />
                    </motion.div>
                    <motion.div
                    initial={{x:"-100vw"}}
                    animate={{x:0}}
                    style={{display: 'flex', justifyContent: 'center', margin: '2rem 1rem 2rem 1rem'}}>
                        <Typo1 
                        text="I am anand and i develop stuff" 
                        fs="4rem" 
                        color="white" 
                        border="2px black" 
                        rest={{textAlign: 'center'}} />
                    </motion.div>
                </div>
        </div>
    )
}