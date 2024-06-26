// @author Nisarg Chudasama

package hirex.service;

import java.util.List;

import hirex.model.ApplicantDetails;
import hirex.model.Job;

public interface ApplicantDetailsService {

  List<Job> getAllJobsAppliedByEmail(String email);

  // @author Sumit Savaliya
  ApplicantDetails getApplicantDetails(String candidateJobId);
} 

