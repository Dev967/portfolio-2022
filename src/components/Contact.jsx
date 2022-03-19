import React, {useRef, useEffect, useState} from "react";
import useOnScreen from "./hooks/useOnScreen";
import { Button } from "./Button";
import { Title } from "./Title";
import {motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";

export const Contact = ({setNavTitle}) => {
    const [sending, setSending] = useState(false)
    const [textMessage, setTextMessage] = useState("")
    const textRef = useRef();
    const [ref, isVisible] = useInView({
        threshold: 0.2,
        delay: 100
    })
    const control = useAnimation()

    useEffect(() => {console.log("SENDING ", sending)}, [sending])

    const sendNotification = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("message", textMessage);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        setSending(true);
        try{    
            await fetch("https://portfolio-notifications.herokuapp.com/message", requestOptions)
        }catch(e){
            alert("Failed to send message ", e)
        }
        setSending(false)
        console.log("MESSAGE ", textMessage)
    }

    useEffect(() => {
        if(isVisible){
            control.start({
                x: 0
            })
        }
    }, [isVisible])
    return(
        <div ref={ref}>
            <motion.div animate={control} initial={{x: '-100vw  '}}>
                <Title text="Send me a message..."/>
            </motion.div>

        <div style={{
            minHeight: '100vh',
        }}>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                <textarea value={textMessage} ref={textRef} onChange={(e) => setTextMessage(e.target.value)} style={{
                    borderRadius: '10px',
                    border: '2px solid black',
                    boxShadow: '4px 4px 3px #060709',
                    padding: '1rem',
                    fontFamily: 'bitwise'
                    }} >Hi Anand, </textarea>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem'
            }}>
                <Button text="Send"  onClick={sendNotification} loading={sending} loadingText={"sending"}/>
            </div>
        </div>
        </div>
    )
}