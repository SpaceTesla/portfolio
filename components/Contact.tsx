"use client"
import {useState} from "react";
import React from "react";
const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setIsSubmitting(true);
        setEmailError('');
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                setMessage('Your message has been sent successfully.');
                const formElement = document.getElementById('contactForm') as HTMLFormElement;
                if (formElement) {
                    formElement.reset();
                }
            } else {
                setMessage('Something went wrong. Please try again.');
            }
        }  catch (error) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage('An unknown error occurred.');
            }
        }
        setIsSubmitting(false);
    }

    return (
        <section id='contact' className='py-20 bg-base-200 text-base-content'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 text-center'>Contact Me</h2>
                <div className='card max-w-md mx-auto bg-base-100 shadow-lg'>
                    <div className='card-body'>
                        <h3 className='card-title text-xl'>Get in touch</h3>
                        <p className='text-base-content/70 mb-4'>
                            Fill out the form below to send me a message.
                        </p>
                        <form className='space-y-4' onSubmit={handleSubmit}>
                            <div className='form-control'>
                                <label htmlFor='name' className='label'>
                                    <span className='label-text'>Name</span>
                                </label>
                                <input
                                    id='name'
                                    name="name"
                                    type='text'
                                    placeholder='Your name'
                                    className='input input-bordered w-full bg-base-200 text-base-content'
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='email' className='label'>
                                    <span className='label-text'>Email</span>
                                </label>
                                <input
                                    id='email'
                                    type='email'
                                    name="email"
                                    placeholder='Your email'
                                    className='input input-bordered w-full bg-base-200 text-base-content'
                                />
                                {emailError && (
                                    <p className="text-sm text-red-600">{emailError}</p>
                                )}
                            </div>
                            <div className='form-control'>
                                <label htmlFor='message' className='label'>
                                    <span className='label-text'>Message</span>
                                </label>
                                <textarea
                                    id='message'
                                    name="message"
                                    placeholder='Your message'
                                    className='textarea textarea-bordered w-full bg-base-200 text-base-content'
                                />
                            </div>
                            <button type='submit' className='btn btn-primary w-full mt-4' disabled={isSubmitting}>
                                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                            </button>
                            {message && <p className="mt-4 text-green-600">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;