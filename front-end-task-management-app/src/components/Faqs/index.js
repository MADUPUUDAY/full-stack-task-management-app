import React, { useState } from 'react';
import './index.css';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What features does the task tracking application offer?",
      answer: "Our task tracking application includes features like task creation, deadline setting, progress tracking, priority assignment, team collaboration, and notifications."
    },
    {
      question: "How does the task tracking application help with productivity?",
      answer: "The application helps boost productivity by allowing users to organize tasks, set priorities, track progress in real time, and collaborate seamlessly with team members."
    },
    {
      question: "Can I assign tasks to multiple team members?",
      answer: "Yes, you can assign tasks to individual team members or multiple people, and monitor their progress and contributions on each task."
    },
    {
      question: "Does the application support deadlines and reminders?",
      answer: "Yes, the application allows you to set deadlines for tasks and provides reminders to ensure tasks are completed on time."
    },
    {
      question: "Can I track the progress of tasks?",
      answer: "Absolutely! You can track the progress of tasks with features like percentage completion, progress bars, and status indicators."
    },
    {
      question: "Is the task tracking application available on mobile?",
      answer: "Yes, our task tracking application is available on both web and mobile platforms, making it easy to manage tasks from anywhere."
    },
    {
      question: "Can I generate reports on task completion?",
      answer: "Yes, the application provides reporting features, allowing you to generate detailed reports on task completion, team performance, and deadlines."
    },
    {
      question: "How do I get started with the task tracking application?",
      answer: "To get started, simply sign up for an account, create your first project, and start adding tasks. Our intuitive interface will guide you through the setup process."
    },
    {
      question: "Does the application integrate with other tools?",
      answer: "Yes, our task tracking application integrates with popular tools like Slack, Google Drive, and Microsoft Teams to streamline your workflow."
    },
    {
      question: "Is there a free version available?",
      answer: "Yes, we offer a free version with basic features. For advanced features, you can upgrade to one of our paid plans."
    }
  ];
  

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>▼</span>
            </button>
            <div 
              className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
              style={activeIndex === index ? {maxHeight: "200px"} : {maxHeight: "0"}}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
