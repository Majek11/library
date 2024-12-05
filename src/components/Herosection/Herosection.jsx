import React from 'react';
import { Book, Search, ArrowRight } from 'lucide-react';
import './Herosection.css';

const LibraryHero = () => {
  return (
    <div className="library-hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Discover Your Next <span className="text-highlight">Great Read</span>
          </h1>
          <p className="hero-description">
            Explore millions of books at your fingertips. Access the world's largest digital library with just a click.
          </p>
          
          <div className="hero-search-container">
            <div className="search-wrapper">
              {/* <Search className="search-icon" /> */}
              <input 
                type="text" 
                placeholder="Search books, authors, genres..." 
                className="hero-search-input"
              />
            </div>
            <button className="search-button">
              Search <ArrowRight className="button-icon" />
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <Book className="stat-icon" />
              <div>
                <h3>2M+</h3>
                <p>Books Available</p>
              </div>
            </div>
            <div className="stat-item">
              <span className="material-icons">groups</span>
              <div>
                <h3>500K+</h3>
                <p>Active Readers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="book-stack">
            <div className="book book-1"></div>
            <div className="book book-2"></div>
            <div className="book book-3"></div>
            <div className="book book-4"></div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default LibraryHero;