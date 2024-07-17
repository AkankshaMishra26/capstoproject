import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import QueryWidget from '../components/QueryWidget';
import JobCard from '../components/JobCard';
import styles from './HomePage.module.css';
import { fetchJobsByQuery } from '../api/Job';

function HomePage({ currentUser, setCurrentUser }) {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState({
    title: '',
    skills: []
  });

  const navigate = useNavigate();

  useEffect(() => {
    handleFetchJobs();
  }, []);

  const handleFetchJobs = async () => {
    try {
      const response = await fetchJobsByQuery(query);
      if (response.status === 200) {
        setJobs(response.data.jobs || []);
      } else {
        console.error('Failed to fetch jobs', response);
      }
    } catch (error) {
      console.error('Error fetching jobs', error);
    }
  };

  const handleAddJob = () => {
    navigate('/create'); // Navigate to the CreateJobPage
  };

  const handleViewJobPage = (jobId) => {
    navigate(`/job/${jobId}`); // Navigate to the JobPage with the specific job ID
  };

  return (
    <div className={styles.homePage}>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className={styles.container}>
        <div className={styles.actionButtons}>
          <button onClick={() => navigate('/login')} className={styles.loginButton}>Login</button>
          <button onClick={() => navigate('/register')} className={styles.signupButton}>Signup</button>
          <button onClick={handleAddJob} className={styles.addJobButton}>+ Add Job</button>
        </div>
        <QueryWidget query={query} setQuery={setQuery} handleFetchJobs={handleFetchJobs} />
        <div className={styles.jobsList}>
          {jobs.length > 0 ? (
            jobs.map(job => (
              <JobCard key={job.id} job={job} onViewJob={() => handleViewJobPage(job.id)} />
            ))
          ) : (
            <p className={styles.noJobs}>No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
