// JobCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct hook for navigation
import styles from './JobCard.module.css';

const JobCard = ({ job }) => {
  const navigate = useNavigate(); // Corrected hook

  const handleClick = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <div className={styles.jobCard} onClick={handleClick}>
      <img src={job.logoUrl} alt="company logo" className={styles.logo} />
      <div className={styles.info}>
        <h3 className={styles.title}>{job.title}</h3>
        <p className={styles.company}>{job.companyName}</p>
        <p className={styles.location}>{job.location}</p>
        <p className={styles.salary}>{job.salary}</p>
        <div className={styles.skills}>
          {job.skills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;











