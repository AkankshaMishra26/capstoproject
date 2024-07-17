import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchJobById } from "../api/Job";
import { useParams } from "react-router-dom";
import styles from "./JobPage.module.css";

const JobPage = ({ currentUser, setCurrentUser }) => {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const response = await fetchJobById(id);
      if (response.status === 200) {
        setJob(response.data.job);
      } else {
        console.error("Failed to fetch job details:", response);
      }
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  };

  const timeElapsedPretty = (createdAt) => {
    const currentTime = new Date();
    const createdAtTime = new Date(createdAt);
    const differenceInMillis = currentTime - createdAtTime;

    const seconds = Math.floor(differenceInMillis / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
      return weeks === 1 ? "1w ago" : `${weeks}w ago`;
    } else if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "1 hr ago" : `${hours} hrs ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "1 min ago" : `${minutes} mins ago`;
    } else {
      return seconds === 1 ? "1 sec ago" : `${seconds} secs ago`;
    }
  };

  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {job ? (
        <div className={styles.jobContainer}>
          <div className={styles.row}>
            <p className={styles.time}>{timeElapsedPretty(job.createdAt)}</p>
            <p className={styles.jobType}>{job.jobType}</p>
            {job.logoUrl && <img src={job.logoUrl} alt="job logo" className={styles.logo} />}
            <p className={styles.companyName}>{job.companyName}</p>
          </div>
          <div className={styles.row}>
            <h4 className={styles.title}>{job.title}</h4>
            {currentUser && <button className={styles.editButton}>Edit Job</button>}
            <p className={styles.location}>{job.location}</p>
          </div>
          <div className={styles.row}>
            <div className={styles.salaryDuration}>
              <p>Stipend</p>
              <h2 className={styles.salary}>{job.salary}</h2>
              <p>Duration</p>
              <p className={styles.duration}>{job.duration}</p>
            </div>
          </div>
          {job.skills && job.skills.length > 0 && (
            <div className={styles.skills}>
              <p>Skills Required:</p>
              <div className={styles.skillsList}>
                {job.skills.map((skill, index) => (
                  <div key={index} className={styles.skill}>{skill}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className={styles.loading}>Loading job details...</p>
      )}
    </div>
  );
};

export default JobPage;
