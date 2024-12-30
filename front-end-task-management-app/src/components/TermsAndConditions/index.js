import React from 'react';
import './index.css';

const TermsAndConditions = () => {
  return (
    <>
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to our website. These terms govern your use of our services.
        </p>
      </div>
      <div className="terms-container">
        <div className="terms-content">
          <section className="section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions and all applicable laws and regulations.
              If you do not agree to these terms, please refrain from using this website.
            </p>
          </section>

          <section className="section">
            <h2>2. Use of Website</h2>
            <p>
              You are permitted to use the website only for lawful purposes. You may not use the website in any way that could damage, disable, or impair the website,
              or interfere with any other user's access to the website.
            </p>
          </section>

          <section className="section">
            <h2>3. User Registration</h2>
            <p>
              You may be required to create an account to access certain features of this website. You agree to provide accurate and complete information when registering
              and to update your information promptly if it changes.
            </p>
          </section>

          <section className="section">
            <h2>4. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              By using the website, you consent to the practices outlined in the Privacy Policy.
            </p>
          </section>

          <section className="section">
            <h2>5. Limitation of Liability</h2>
            <p>
              We are not liable for any damages that arise from your use of this website, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="section">
            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to update or change these Terms and Conditions at any time. It is your responsibility to review these terms periodically for any changes.
              Your continued use of the website after any changes have been made constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="section">
            <h2>7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of the jurisdiction where the website owner is located. Any disputes will be subject to the exclusive
              jurisdiction of the courts in that region.
            </p>
          </section>

          <section className="section">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
