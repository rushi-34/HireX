// @author Nisarg Chudasama

import { CircularProgress, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useEffect, useState } from "react";
import { getAllJobsAppliedByEmail } from "../../services/api/jobApis";
import { useAuth } from "../../authUtility/authprovider";

const SkeletonJob = ({ job, onJobUpdate }) => {
  const navigate = useNavigate();

  const handleViewStatus = () => {
    navigate(`/status/${job.jobId}`);
  }


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
        <Button onClick={handleViewStatus} variant="contained" color="primary" style={{ marginTop: '10px' }}>
          View Status
        </Button>
      </CardContent>
    </Card>
  );
};

const CandidateAppliedJobs = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true);
      await getAllJobsAppliedByEmail(setJobData, user.sub);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);



  const handleJobUpdate = async () => {
    await getAllJobsAppliedByEmail(setJobData, user.sub);
  };

  return (
    <div style={{ width: '100%', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Applied Jobs
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

export default CandidateAppliedJobs;
