"use client"
import React, { useRef, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import emailjs from 'emailjs-com';
import Link from 'next/link';

export default function Page() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [messageSent, setMessageSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendEmail = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        emailjs
            .sendForm('service_04i5wbi', 'template_niqf7sp', e.target, 'jltWkwjye-Du-lq6D')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessageSent(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            <div className="header-page contact">
                <h2>Contact Me</h2>

                <div>Feel free to say hi!</div>
                <div><Link href={'https://www.linkedin.com/in/daniel-irungu/'} target='_blank'>via LinkedIn</Link></div>
                <span>You can fill out the form below or shoot me an email at:<Link href={'mailto:danielirungu544@gmail.com'}> danielirungu544@gmail.com</Link></span>
            </div>
            <Container>
                {!messageSent ? (
                    <Form onSubmit={sendEmail}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Button type="submit" color="primary">Send</Button>
                    </Form>
                ) : (
                    <p>Email has been sent. Thank you!</p> // Display message if email sent
                )}
            </Container>
        </>
    )
}