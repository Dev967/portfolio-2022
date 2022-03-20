import React from 'react';
import {motion} from 'framer-motion';
import logo from "../assets/logo.png"
import "../Loader.css"
import {Typo1} from "./typography/Typo1"

export const Loading = () => {
    return (
        <div style={
            {
                background: "linear-gradient(180deg, #FCBDA1 0%, #F55568 100%)",
                width: "100vw",
                height: "100vh"
            }
        }>
            <div style={
                {
                    backgroundColor: "white",
                    border: "3px solid black",
                    padding: "3rem",
                    borderRadius: "5px",
                    boxShadow: "2px 3px 1px 2px black",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: "50%",
                    top: "50%",
                    transform: 'translate(-50%, -50%)'
                }
            }>

                <div>

                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'center'
                        }
                    }>

                        <motion.img animate={
                                {rotate: 360}
                            }
                            transition={
                                {
                                    repeat: Infinity,
                                    ease: "backInOut",
                                    duration:1 
                                }
                            }
                            src={logo}/>
                    </div>
                    <Typo1 text="Loading..."
                        rest={
                            {
                                textAlign: 'center',
                                marginTop: "3rem"
                            }
                        }/>
                </div>
            </div>
        </div>
    )
}
