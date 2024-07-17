import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import loginBackgroundImage from "../assets/background.png"; // Import your login page background image

const RegisterPage = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., call to an API
    if (formData.name && formData.email && formData.mobile && formData.password) {
      // Mock registration success
      setCurrentUser(true);
      navigate("/");
    } else {
      setError("All fields are required");
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.formContainer}>
        <h2>Create an account</h2>
        <p className={styles.subheader}>Your personal job finder is here</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              By creating an account, I agree to our terms of use and privacy policy
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
      <div className={styles.imageContainer} style={{ backgroundImage: `url(${loginBackgroundImage})` }}>
        <div className={styles.overlay}>
          <h1>Your Personal Job Finder</h1>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;



