"use client"

import { Button } from "./ui/button";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MailIcon, ArrowRightIcon, MessageSquare} from "lucide-react"


const Form = () => {
    const [state, handleSubmit] = useForm("mnqeawal");
    if (state.succeeded) {
        return <p>Thank you for getting in touch with me.!</p>;
    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                        <Input type="email" id="email" placeholder="Email" name="email" />
                        <MailIcon className="absolute right-6" size={20} />
            </div>

            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            
            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." id="message" name="message"/>
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>

            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />

            <Button type="submit" disabled={state.submitting} className="flex items-center gap-x-1 max-w-[166px]">
            Let's Talk
            <ArrowRightIcon size={20}/>
            </Button>
        </form>
    );
}


export default Form