import React, { useState } from "react";
import style from "../components/card.module.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message sent successfully!");

        // reset form
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.contact}>
                <h2>Contact Us</h2>

                <form onSubmit={handleSubmit} className={style.form}>

                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;