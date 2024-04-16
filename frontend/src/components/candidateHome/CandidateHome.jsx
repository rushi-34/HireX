// @author Nisarg Chudasama

import { CircularProgress, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/api/jobApis";

const SkeletonJob = ({ job, onJobUpdate }) => {
  const navigate = useNavigate();

  const handleViewJob = () => {
    navigate(`/candidate/job/${job.jobId}`);
  };

  const handleApplyJob = () => {
    navigate('/job-application/'+ job.jobId);
  };



  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardMedia
        component="img"
        height="140"
        image={job.companyImage}
        alt="Company"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.jobName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.jobDescription?.substring(0, 10)}...
        </Typography>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleViewJob} variant="contained" color="primary">
            View Job
          </Button>
          <Button onClick={handleApplyJob} variant="contained" color="primary">
           Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const CandidateHome = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true);
      await getAllJobs(setJobData);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);



  const handleJobUpdate = async () => {
    await getAllJobs(setJobData);
  };

  return (
    <div style={{ width: '100%', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Posted Jobs
      </Typography>
      {isLoading ? (
        <CircularProgress color="primary" size={80} />
      ) : (
        <Grid container spacing={2} sx={{ textAlign: 'center', maxWidth: '100%' }}>
          {jobData.map((job, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <SkeletonJob job={job} onJobUpdate={handleJobUpdate} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CandidateHome;
