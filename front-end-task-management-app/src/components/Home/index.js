import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; 
import { red } from '@mui/material/colors';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Prices from '../Prices';


const Home = () => {
    const navigate = useNavigate();

    const handleTryItFree = () => {
        navigate('/try-it-free');
    };
    const handleViewPrices = () => {
        navigate("/tasktracker")
    }

    return (
        <div className='main-container'>
            <div className="home-container">
                <div className="home-left">
                    <h1 className="home-header"><span style={{ "color": "green" }}>Plan Less,</span> Do More</h1>
                    <p className="home-description">
                        Keep your tasks organized and efficiently manage your projects. Our task tracking app helps you stay on top of your work, with priority settings, due date reminders, and status updates. Simplify your workflow and increase productivity.
                    </p>
                    <div>
                        <button className="home-button" onClick={handleTryItFree}>
                            Try It Free
                        </button>
                        <button className="prices-button" onClick={handleViewPrices} style={{"color":"white"}}>
                            Get Start
                        </button>
                    </div>

                </div>

                <div className="home-right">
                    <img
                        src="https://res.cloudinary.com/monday-blogs/w_1024,h_576,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2024/01/monday-work-management-automation-scaled.jpg"
                        alt="Task Management Illustration"
                        className="home-image"
                    />
                </div>
            </div>
            <div className='second-continer'>
                <h3 className='second-container-heading' style={{ "color": "gray" }}>Trusted by over 18,000 companies worldwide</h3>
                <div className='logo-images'>
                    <img src='https://seeklogo.net/wp-content/uploads/2015/09/google-logo.png' className='company-logos' />
                    <img src='https://logos-world.net/wp-content/uploads/2023/02/Scott-Logo-1990s.png' className='company-logos' />
                    <img src='https://images-platform.99static.com/KIdrZHBeHcIU0wUrgYYaJTVRsgs=/0x0:1412x1412/500x500/top/smart/99designs-contests-attachments/86/86300/attachment_86300235' className='company-logos' />
                    <img src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-management-logo-template-llmuf11ad91b71.webp' className='company-logos' />
                    <img src='https://images-platform.99static.com/-Zer4Zi92j7XNHyLSG0q5LkC_hU=/115x0:1341x1226/500x500/top/smart/99designs-contests-attachments/86/86286/attachment_86286054' className='company-logos' />

                </div>
            </div>
            <div className='third-container'>
                <h1 className='third-heading' style={{ "color": "black" }}>Make work more<br /> transparent, efficient, and <br />accounted for</h1>
                <div class="features-container">
                    <div class="feature-box">
                        <div class="icon1" >
                            <i class="fa fa-bars"></i>
                        </div>
                        <h3>Everyone is always in the loop</h3>
                        <p>Easily searchable and organized tasks mean everyone stays up-to-date on what matters.</p>
                    </div>

                    <div class="feature-box">
                        <div class="icon1">
                            <i class="fa fa-book"></i>
                        </div>
                        <h3>Analyze workflows for inefficiencies</h3>
                        <p>Documenting your workflow and following tasks through each stage means more insights for streamlining.</p>
                    </div>

                    <div class="feature-box">
                        <div class="icon1">
                            <i class="fa fa-phone"></i>
                        </div>
                        <h3>Create accountability when collaborating</h3>
                        <p>Assign each issue to a team member, so tasks always have someone responsible for moving them forward.</p>
                    </div>

                    <div class="feature-box">
                        <div class="icon1">
                            <i class="fa fa-check"></i>
                        </div>
                        <h3>Easily sort and prioritize work</h3>
                        <p>With robust search and filters, you can see all unresolved issues and quickly prioritize what matters most.</p>
                    </div>
                </div>

            </div>
            <div className='fourth-container'>
                <h2 className='fouth-heading'>Features for accurate tracking and<br /> process optimization</h2>
                <div className='fourth-card'>
                    <div>
                        <img src="https://nulab.com/images/landing/backlog-track-progress.png" className='home-image' />
                    </div>
                    <div>
                        <h2 className='heading1'>
                            Track progress visually
                        </h2>
                        <p className='description'>Plan tasks, milestones, and workflows with Gantt charts and Boards; then use burndown charts to stay on target.</p>
                    </div>
                </div>
                <div className='fourth-card'>
                    <div>
                        <h2 className='heading1'>
                            Track progress visually
                        </h2>
                        <p className='description'>Plan tasks, milestones, and workflows with Gantt charts and Boards; then use burndown charts to stay on target.</p>
                    </div>
                    <div>
                        <img src="https://nulab.com/images/landing/backlog-watch-feature.png" className='home-image' />
                    </div>
                </div>
                <div className='fourth-card'>
                    <div>
                        <img src="https://nulab.com/images/landing/backlog-stay-organized.png" className='home-image' />
                    </div>
                    <div>
                        <h2 className='heading1'>
                            Track progress visually
                        </h2>
                        <p className='description'>Plan tasks, milestones, and workflows with Gantt charts and Boards; then use burndown charts to stay on target.</p>
                    </div>
                </div>
                <div className='fourth-card'>
                    <div>
                        <h2 className='heading1'>
                            Track progress visually
                        </h2>
                        <p className='description'>Plan tasks, milestones, and workflows with Gantt charts and Boards; then use burndown charts to stay on target.</p>
                    </div>
                    <div>
                        <img src="https://nulab.com/images/landing/backlog-quickly-create-task.png" className='home-image' />
                    </div>
                </div>
            </div>
            <div className='fifth-container'>
                <h2 className='customer-heading'>Customer Voices</h2>
                <p className='customer-quote'>“It has a crystal clear user interface, speed, and all necessary functions together. No useless functions. Well designed. Easy to adopt. Nice look & feel.”</p>
                <p className='customer-name'>Ivan Borek</p>
                <p className='customer-title'>Managing Consultant</p>
            </div>
            <h1>Try <span style={{ "color": "green" }}>Task Tracker </span>today for free</h1>
            <Prices/>
            <h1 style={{"font-size":"25px"}}>Learn more about all plan options and<br/>
            add-ons on the<span style={{ "color": "green"}}> pricing page </span> </h1>
            <h1 style={{ "font-size":"40px"}}>Integrate with your favorite apps</h1>
            <div className='sixth-container'>
                <img src='https://nulab.com/images/fav-app-icons/icon-slack.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-sheets.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-redmine.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-calendar.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-lambdatest.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-jira.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-mail.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-android.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-jenkins.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-api.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-apple.svg' className='logo'/>
                <img src='https://nulab.com/images/fav-app-icons/icon-copilot.svg' className='logo'/>
            </div>
        </div>
    );
};

export default Home;
