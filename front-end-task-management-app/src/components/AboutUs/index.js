import React from 'react';
import './index.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <img src="https://www.eclixxo.com/wp-content/uploads/2018/02/contenido-web-12.jpg" alt="Technology" className="hero-image" />
                <div className="hero-content">
                    <h1 className="hero-title">Why Choose Us</h1>
                    <p className="hero-text">Choosing a software company is a pivotal decision that can profoundly impact your digital initiatives. At our company, we provide expertise, excellence, and collaboration to empower your business and help you thrive in today's dynamic landscape.</p>
                    <button className="hero-button">Learn More</button>
                </div>
            </section>

            <section className="mission-section">
                <div className="content">
                    <h2 className="section-title">Our Mission</h2>
                    <p className="section-text">We strive to revolutionize the digital landscape by delivering transformative software solutions that solve real-world problems and unlock opportunities for growth. We value integrity, innovation, and excellence, ensuring that our solutions exceed expectations and drive meaningful change.</p>
                </div>
            </section>

            <section className="vision-section">
                <div className="content">
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-text">We specialize in developing cutting-edge software solutions that enhance efficiency and drive progress for businesses across various industries. Our customer-centric approach ensures we create lasting relationships with clients, delivering solutions that not only meet but exceed their needs.</p>
                </div>
            </section>

            <section className="team-section">
                <div className="content">
                    <h2 className="section-title">Let's Get in Touch</h2>
                    <p className="section-text">For inquiries, collaborations, or consultations, feel free to reach out to us today. Our dedicated team is ready to assist you on your digital transformation journey. Contact us via phone or email, and let’s start building your future together.</p>
                    <p className="contact-info">Call Us: +91 9542737046 | Email: mahesh.gudivada55@gmail.com</p>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
