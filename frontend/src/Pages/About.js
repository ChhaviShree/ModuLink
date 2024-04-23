import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar/Navbar';
import "./About.css";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-size:20px;

`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TeamMember = styled.div`
  flex: 0 0 calc(50% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TeamMemberImage = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;

const TeamMemberName = styled.h4`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const About = () => {
  return (
    <div className="about-parent">
    <Navbar menu={"about"} />
    <Container>
      <Section>
        <h2>Welcome to Our Modular Housing Company</h2>
        <p>We are dedicated to revolutionizing the housing industry with our innovative modular construction methods. Our goal is to provide affordable, sustainable, and high-quality housing solutions to our customers.</p>
      </Section>
      
      <Section>
        <h3>Our Mission</h3>
        <p>At MODULINK, our mission is to:</p>
        <ul>
          <li>Deliver innovative modular housing solutions that exceed customer expectations.</li>
          <li>Promote sustainability by using eco-friendly materials and construction practices.</li>
          <li>Empower communities by providing access to safe and affordable housing.</li>
          <li>Drive positive change in the housing industry through continuous innovation and improvement.</li>
        </ul>
      </Section>
      
      <Section>
        <h3>Our Values</h3>
        <p>We are guided by the following core values:</p>
        <ul>
          <li><strong>Quality:</strong> We are committed to delivering products and services of the highest quality.</li>
          <li><strong>Sustainability:</strong> We prioritize environmental responsibility in all aspects of our operations.</li>
          <li><strong>Customer Satisfaction:</strong> We strive to exceed customer expectations and build long-lasting relationships.</li>
          <li><strong>Innovation:</strong> We embrace creativity and innovation to drive continuous improvement and stay ahead of industry trends.</li>
          <li><strong>Integrity:</strong> We conduct business with honesty, transparency, and ethical behavior.</li>
        </ul>
      </Section>
      
      <Section>
        <h3>Meet Our Team</h3>
        <TeamMembers>
          <TeamMember>
            <TeamMemberImage src="team-member1.jpg" alt="Chhavi Shree" />
            <TeamMemberName>Chhavi Shree</TeamMemberName>
            <p>CEO</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src="team-member2.jpg" alt="Sanket Dash" />
            <TeamMemberName>Sanket Dash</TeamMemberName>
            <p>Head of Operations</p>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src="team-member2.jpg" alt="Manas Ranjan" />
            <TeamMemberName>Manas ranjan</TeamMemberName>
            <p>Head of Departement</p>
          </TeamMember>
        </TeamMembers>
      </Section>
      
      <Section>
        <h3>Contact Us</h3>
        <p>If you have any questions or inquiries, please feel free to contact us:</p>
        <p>Email: contact@modulink.com</p>
        <p>Phone:+917606875760</p>
      </Section>
    </Container>
    </div>
  );
};

export default About;
