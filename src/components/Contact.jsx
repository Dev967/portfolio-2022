import React, {useRef, useEffect, useState} from "react";
import {Button} from "./Button";
import {Title} from "./Title";
import {motion, useAnimation} from 'framer-motion'
import {useInView} from "react-intersection-observer";
import githubIcon from "../assets/github.png"
import twitterIcon from "../assets/twitter.png"
import linkedInIcon from "../assets/linkedin.png"
import mailIcon from "../assets/mail.png"
import blogIcon from "../assets/blog.png"

export const Contact = () => {
    const [sending, setSending] = useState(false)
    const [textMessage, setTextMessage] = useState("Hi Anand, ")
    const textRef = useRef();
    const [ref, isVisible] = useInView({threshold: 0.2, delay: 100})
    const control = useAnimation()
    const control2 = useAnimation();

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
        try {
            await fetch("https://portfolio-notifications.herokuapp.com/message", requestOptions)
        } catch (e) {
            alert("Failed to send message ", e)
        }
        setSending(false)
    }

    useEffect(() => {
        if (isVisible) {
            control.start({x: 0})
        }
    }, [isVisible, control])

    useEffect(() => {
        if (isVisible) {
            control2.start({y: 0})
        }
    }, [isVisible, control2])


    return (
        <div ref={ref}>
            <motion.div animate={control}
                initial={
                    {x: '-100vw  '}
            }>
                <Title text="Send me a message..."/>
            </motion.div>

            <div style={
                {minHeight: '100vh', overflow: "hidden"}
            }>
                <div 
                style={{
                    display: 'flex',
                    justifyContent: "center"
                }}
                >
                    <div
                   style={{
                        background: "white",
                        border: "3px solid black",
                        margin: "5rem 3rem",
                        borderRadius: "5px",
                        boxShadow: "4px 4px 1px 2px black",
                        display: 'flex',
                        textAlign: 'center',
                        padding: "1rem",
                        minWidth: "18rem"
                   }} 
                    >
                        <img style={{margin: "0 1vw", cursor: "pointer"}} alt="github" onClick={() => window.open("https://github.com/Dev967", "_blank")}  src={githubIcon} />
                        <img style={{margin: "0 1vw", cursor: "pointer"}} alt="linkedIn" onClick={() => window.open("https://www.linkedin.com/in/anand-parmar-a5026b187/", "_blank")}  src={linkedInIcon} />
                        <img style={{margin: "0 1vw", cursor: "pointer"}} alt="twitter" onClick={() => window.open("https://twitter.com/contributor_", "_blank")}  src={twitterIcon} />
                        <img style={{margin: "0 1vw", cursor: "pointer"}} alt="email" onClick={() => {
                            alert("Copied to clipboard")
navigator.clipboard.writeText("devanandparmar@protonmail.com")
                        }}  src={mailIcon} />
                        <img style={{margin: "0 1rem", cursor: "pointer", width: 50}} alt="blog" onClick={() => window.open("https://dev967.github.io/knowledgebase/", "_blank")}  src={blogIcon} />
                    </div>
                </div>
                    <motion.div initial={
                            {y: '100vh'}
                        }
                        animate={control2}
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center'
                            }
                    }>
                        <textarea value={textMessage}
                            ref={textRef}
                            onChange={
                                (e) => setTextMessage(e.target.value)
                            }
                            style={
                                {
                                    borderRadius: '10px',
                                    border: '2px solid black',
                                    boxShadow: '4px 4px 3px #060709',
                                    padding: '1rem',
                                    fontFamily: 'bitwise'
                                }
                        }>
                        </textarea>
                    </motion.div>
                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '1rem'
                        }
                    }>
                        <Button text="Send"
                            onClick={sendNotification}
                            loading={sending}
                            loadingText={"sending"}/>
                    </div>

            </div>
        </div>
    )
}
