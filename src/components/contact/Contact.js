import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required").min(2, "Minimum 2 characters"),
    lastName: yup.string().required("Last name is required").min(2, "Minimum 2 characters"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    message: yup.string().required("Message is required").min(10, "Minimum 10 characters")
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstName" placeholder="First name" ref={register()} />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input name="lastName" placeholder="Last name" ref={register()} />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <input name="email" placeholder="Email" ref={register()} />
            {errors.email && <p>{errors.email.message}</p>}

            <input name="message" placeholder="Message" ref={register()} />
            {errors.message && <p>{errors.message.message}</p>}

            <input type="submit" />
        </form>
    );
}

export default Contact;
