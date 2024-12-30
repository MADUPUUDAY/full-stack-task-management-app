import React, { useState } from 'react';
import './index.css'; 

const PrivacyPolicy = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="privacy-policy-container1">
      </div>
      
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-header">Privacy Policy</h1>
        <p className="intro">
          Welcome to our Privacy Policy page! At TaskTrackr, we are committed to protecting your personal data. This Privacy Policy outlines the types of personal information we collect and how we use, share, and protect it in the context of our task tracking application.
        </p>

        <section className="section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you provide directly, such as your name, email address, and task-related data. We may also collect information about how you use the application, including task completion rates, deadlines, and performance metrics.
          </p>
        </section>

        <section className="section">
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to enhance your experience with the task tracking application. This includes assigning tasks, tracking progress, sending reminders, and generating performance reports. We may also use this information to improve the functionality of the app and provide customer support.
          </p>
        </section>

        <section className="section">
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and other tracking technologies to enhance user experience and analyze how the application is used. Cookies allow us to remember your preferences, help manage sessions, and improve our service offerings. You can manage or disable cookies through your browser settings.
          </p>
        </section>

        <section className="section">
          <h2>4. Data Security</h2>
          <p>
            We take the security of your personal data seriously. We implement encryption, secure servers, and regular security audits to protect your data from unauthorized access, alteration, or loss.
          </p>
        </section>

        <section className="section">
          <h2>5. Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties without your consent, except as necessary to provide our services (such as cloud storage or communication tools). We may share aggregated, anonymized data for analytics purposes.
          </p>
        </section>

        <section className="section">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, modify, or request deletion of your personal data. You can also request to export your task data for backup or transfer purposes. Please contact us at support@tasktrackr.com for assistance with these requests.
          </p>
        </section>

        <section className="section">
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update or change our privacy policy from time to time. We will notify users of significant changes by posting the updated policy on this page or sending an email notification.
          </p>
        </section>

        <section className="section">
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or how your data is handled, please contact us at <a href="mailto:support@tasktrackr.com">support@tasktrackr.com</a>.
          </p>
        </section>

        <button className="toggle-btn" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>

        {showMore && (
          <section className="section additional-info">
            <h2>Additional Information</h2>
            <p>
              By using our task tracking application, you agree to the terms outlined in this Privacy Policy. If you do not agree with our policies, please refrain from using the platform.
            </p>
            <p>
              We also use analytics tools to understand how users interact with the application, helping us improve performance and introduce new features.
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default PrivacyPolicy;
