import React, { useState } from 'react';
import styles from './AddJobPage.module.css';

const AddJobPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    logoUrl: '',
    jobPosition: '',
    salary: '',
    jobType: '',
    remote: '',
    location: '',
    jobDescription: '',
    aboutCompany: '',
    skills: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className={styles.addJobPage}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Add job description</h2>
        <label>Company Name</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />

        <label>Add logo URL</label>
        <input type="text" name="logoUrl" value={formData.logoUrl} onChange={handleChange} />

        <label>Job position</label>
        <input type="text" name="jobPosition" value={formData.jobPosition} onChange={handleChange} />

        <label>Monthly salary</label>
        <input type="text" name="salary" value={formData.salary} onChange={handleChange} />

        <label>Job Type</label>
        <select name="jobType" value={formData.jobType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="internship">Internship</option>
        </select>

        <label>Remote/office</label>
        <select name="remote" value={formData.remote} onChange={handleChange}>
          <option value="">Select</option>
          <option value="remote">Remote</option>
          <option value="office">Office</option>
        </select>

        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />

        <label>Job Description</label>
        <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} />

        <label>About Company</label>
        <textarea name="aboutCompany" value={formData.aboutCompany} onChange={handleChange} />

        <label>Skills Required</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter comma-separated skills" />

        <label>Information</label>
        <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />

        <button type="submit" className={styles.addButton}>+ Add Job</button>
      </form>
      <div className={styles.sideImage}>
        <p>Recruiter add job details here</p>
      </div>
    </div>
  );
};

export default AddJobPage;
