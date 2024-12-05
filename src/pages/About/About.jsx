import React from 'react';
import { BookOpen, Globe, Users, Heart } from 'lucide-react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-content">
        <div className="about-header">
          <h1>About Our Digital Library</h1>
          <p>Connecting Readers, Inspiring Minds</p>
        </div>

        <div className="about-mission">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We believe in the transformative power of reading. Our digital library was founded with a simple yet profound goal: 
              to make knowledge and stories accessible to everyone, anywhere, at any time.
            </p>
          </div>
          <div className="mission-icon">
            <BookOpen size={64} className="icon" />
          </div>
        </div>

        <div className="about-sections">
          <div className="about-section">
            <Globe size={48} className="section-icon" />
            <h3>Global Access</h3>
            <p>
              With over 2 million books from around the world, we break down geographical barriers 
              to knowledge and literature.
            </p>
          </div>

          <div className="about-section">
            <Users size={48} className="section-icon" />
            <h3>Community Driven</h3>
            <p>
              Our platform is more than a library. It's a community of passionate readers, 
              scholars, and lifelong learners connecting through the love of books.
            </p>
          </div>

          <div className="about-section">
            <Heart size={48} className="section-icon" />
            <h3>Inclusive Learning</h3>
            <p>
              We are committed to providing diverse, inclusive content that represents 
              voices from all backgrounds, cultures, and perspectives.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <h2>Join Our Reading Community</h2>
          <p>Discover, learn, and grow with millions of readers worldwide.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;