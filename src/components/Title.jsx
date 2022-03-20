import {motion } from 'framer-motion'
import { Typo1 } from './typography/Typo1';

export const Title = ({text, rest}) => {
        return (
        <motion.div style={
            {
                background: "white",
                border: "3px solid black",
                margin: "5rem 3rem",
                borderRadius: "5px",
                boxShadow: "4px 4px 1px 2px black",
                display: 'flex',
                textAlign: 'center',
                ...rest
            }
        }>
            <Typo1 text={text} fs="3rem"
                rest={
                    {margin: "1rem"}
                }/>
        </motion.div>
    )
}
