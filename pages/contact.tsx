import { useEffect, useState } from "react";

export default function ContactPage() {
    let [email, setEmail] = useState("laurcons[at]outlook.com");
    useEffect(() => {
        setEmail(email.replace("[at]", "@"));
    }, []);
    return <>
        <h1>Contact me!</h1>
        <p>If there's anything you want to tell me, <i>literally anything</i>, contact me using one of the methods below.</p>
        <h2>Email</h2>
        <p>Hit me up on <a href={`mailto:${email}`}>{email}</a> !</p>
        <h2>Discord</h2>
        <p>Send me a friend request over at laurcons#8284 !</p>
    </>;
}