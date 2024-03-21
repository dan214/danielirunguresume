"use client"
import React, { useRef, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import emailjs from 'emailjs-com';

export default function Page() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [messageSent, setMessageSent] = useState(false);

    const form = useRef();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("e")
        console.log(e)
        console.log(form.current)

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
            <div className="header-page">
                <h2>Contact Me</h2>
            </div>
            <Container>
                <h2>Contact Me</h2>
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