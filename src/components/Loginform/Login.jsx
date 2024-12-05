import React, { useState } from 'react';
import { Lock, Mail, User, Eye, EyeOff } from 'lucide-react';
import './Login.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      console.log('Login submitted:', { 
        email: formData.email, 
        password: formData.password 
      });
    } else {
      // Signup logic
      console.log('Signup submitted:', formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Reset form when switching between login and signup
    setFormData({
      email: '',
      password: '',
      username: ''
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your username"
                  required={!isLogin}
                />
              </div>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your password"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            className="submit-button"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        
        <div className="auth-mode-toggle">
          <button
            onClick={toggleAuthMode}
            className="mode-switch-button"
          >
            {isLogin 
              ? 'Need an account? Sign Up' 
              : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;