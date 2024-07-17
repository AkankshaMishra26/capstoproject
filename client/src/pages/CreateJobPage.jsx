import React, { useState } from "react";
import styles from "./CreateJobPage.module.css";

const CreateJobPage = () => {
  const [jobData, setJobData] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    remoteOrOffice: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skillsRequired: [],
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e) => {
    const options = e.target.options;
    const selectedSkills = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSkills.push(options[i].value);
      }
    }
    setJobData((prevData) => ({
      ...prevData,
      skillsRequired: selectedSkills,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.createJobPage}>
      <div className={styles.formContainer}>
        <h2 className={styles.pageTitle}>Add job description</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Company Name
            <input
              type="text"
              name="companyName"
              value={jobData.companyName}
              onChange={handleChange}
              placeholder="Enter your company name here"
            />
          </label>
          <label>
            Add logo URL
            <input
              type="text"
              name="logoUrl"
              value={jobData.logoUrl}
              onChange={handleChange}
              placeholder="Enter the logo URL"
            />
          </label>
          <label>
            Job position
            <input
              type="text"
              name="jobPosition"
              value={jobData.jobPosition}
              onChange={handleChange}
              placeholder="Enter your position"
            />
          </label>
          <label>
            Monthly salary
            <input
              type="text"
              name="monthlySalary"
              value={jobData.monthlySalary}
              onChange={handleChange}
              placeholder="Enter Amount in rupees"
            />
          </label>
          <label>
            Job Type
            <select name="jobType" value={jobData.jobType} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>
          </label>
          <label>
            Remote/Office
            <select name="remoteOrOffice" value={jobData.remoteOrOffice} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Remote">Remote</option>
              <option value="Office">Office</option>
            </select>
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              placeholder="Enter Location"
            />
          </label>
          <label>
            Job Description
            <textarea
              name="jobDescription"
              value={jobData.jobDescription}
              onChange={handleChange}
              placeholder="Type the job description"
            />
          </label>
          <label>
            About Company
            <textarea
              name="aboutCompany"
              value={jobData.aboutCompany}
              onChange={handleChange}
              placeholder="Type about your company"
            />
          </label>
          <label>
            Skills Required
            <select
              name="skillsRequired"
              multiple={true}
              value={jobData.skillsRequired}
              onChange={handleSkillsChange}
              className={styles.skillsSelect}
            >
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="Java">Java</option>
              <option value="Spring">Spring</option>
              <option value="SQL">SQL</option>
              <option value="NoSQL">NoSQL</option>
              <option value="AWS">AWS</option>
              <option value="Azure">Azure</option>
            </select>
          </label>
          <label>
            Information
            <textarea
              name="additionalInfo"
              value={jobData.additionalInfo}
              onChange={handleChange}
              placeholder="Enter the additional information"
            />
          </label>
          <div className={styles.buttonGroup}>
            <button type="button" className={styles.cancelButton}>Cancel</button>
            <button type="submit" className={styles.addButton}>+ Add Job</button>
          </div>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <h2>Recruiter add job details here</h2>
        <img src='../image_job_page.jpg' alt='Recruiter add job details here' className={styles.image} />
      </div>
    </div>
  );
};

export default CreateJobPage;
