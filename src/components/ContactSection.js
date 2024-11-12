import React from 'react';

function ContactSection() {
    return (
        <section className="contact" id="contact">
            <h3>Contact</h3>
            <p>Nama: Maulana Candra Wijaya</p>
            <p>Telepon: <a href="tel:+6282247255697">+62 822 4725 5697</a></p>
            <p>Email: <a href="mailto:mazcndra@gmail.com">mazcndra@gmail.com</a></p>
            <p>Follow us on:</p>
            <div className="social-media">
                <a href="https://www.instagram.com/mazcndr_/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="map">
                <iframe
                    title="Warung Pojok Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.2954082365595!2d114.5906236110646!3d-8.372574991630083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3df3dbb36754f%3A0x19427ab4b211ef55!2sWarung%20Pojok!5e0!3m2!1sid!2sid!4v1730299247664!5m2!1sid!2sid"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}

export default ContactSection;
