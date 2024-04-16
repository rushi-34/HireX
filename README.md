# Group Project

## Authors

* [Raj Patel](r.patel@dal.ca)
* [Rushikumar Patel](rs525735@dal.ca)
* [Nisarg Chudasama](ns458128@dal.ca)
* [Sumit Mansukhlal Savaliya](sm572004@dal.ca)
* [Vivek Alpeshbhai Sonani](viveksonani@dal.ca)
* [Roshni Joshi](rs888392@dal.ca)

## REPOSITORY LINKS

* *Date Created*: 27 FEB 2024
* *Last Modification Date*: 04 APR 2024
* *GROUP PROJECT URL*: <https://git.cs.dal.ca/roshni/csci-5709-grp-08>
* *Deployed Application*: <https://main--hirex5709.netlify.app/>

## Deployment

We created a new private repository on github for project deployment and pushed our code to that repository. Then, we imported the frontend project on netlify from github and setup build settings to deploy the application. Similarly, we imported the backend projects on render from github and setup their build settings to deploy the applications. For deploying on render, we have created dockerfile in our projects. Finally, both our frontend and backend applications were deployed, and are live on the mentioned link.

Note: When using spring boot for the group project, render may occasionally shut down the service due to inactivity. Therefore, the first API request may take around 1 minute, but subsequent requests should work fine. Moreover, when we are connected to Dalhousie University wifi, our application deployed on render gives connection timeout error. However, the same application perfectly works fine when connected to our personal wifi or when running on localhost. Perhaps, there might be some network blocking from render's end or from Dalhousie wifi, which results into the issue. Hence, please consider connecting to your personal wifi network while testing our project submission. Meanwhile, we are in the process of communicating the issue with Dalhousie IT support team and trying to find the cause behind the issue.

## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Dependency Management
* [Material](https://mui.com/material-ui/getting-started/) - Used for application CSS
* [Spring Boot](https://spring.io/projects/spring-boot) - The backend framework used
* [Java](https://www.java.com/) - The programming language used
* [Maven](https://maven.apache.org/) - Used as a build tool and for dependency management 
* [Docker](https://www.docker.com/) - Used for containerization
* [MongoDB](https://www.mongodb.com/atlas/database) - Database used

## Sources Used

### CodeAssessmentForm.jsx

*Lines 90 - 96*

```
<Stepper activeStep={activeStep}>
  {steps.map((label) =>
    <Step key={label} >
      <StepLabel>{label}</StepLabel>
    </Step>
  )}
</Stepper>

```
The code above was created by adapting the code in [Stepper - Official Material CSS UI Components](https://mui.com/material-ui/react-stepper/) as shown below: 

```
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

```
- The code in [Stepper - Official Material CSS UI Components](https://mui.com/material-ui/react-stepper/) was implemented by thoroughly studying original component. After understanding its functionality and source code, I adapted the code to suit the requirements of my assignment.
- [Stepper - Official Material CSS UI Components](https://mui.com/material-ui/react-stepper/) Code was used because I believed it would be a valuable foundation for my assignment. The original code provided useful insights into the problem domain, allowed me to explore different approaches and learn specific techniques. My goal was to get the base knowledge about different components available and how it can be efficiently implemented, considering my project requirements. I believe incorporating well-implemented code from external sources would help me achieve the desired functionality and results, along with speeding up my development process.
- [Stepper - Official Material CSS UI Components](https://mui.com/material-ui/react-stepper/) Code was modified by altering it according to the need of component with major changes in code like adding or updating attributes and properties, adding or removing inner components as required and integrating it with other components, along with updating the content based on requirements of the module.

### CodeFormFirstPage.jsx

*Lines 10 - 85*

```
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

return (
  <React.Fragment>
    <Box sx={{ px: '7%' }}>
      <Grid container rowGap={3} columnSpacing={3} sx={{ marginTop: '10%' }}>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            id="languages"
            options={languages}
            disableCloseOnSelect
            value={data.languages}
            getOptionLabel={(language) => language}
            onChange={(event, value) => setData(prev => ({ ...prev, languages: value }))}
            renderOption={(props, language, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {language}
              </li>
            )}
            fullWidth
            renderInput={(params) => (
              <TextField
                error={hasSubmitted && (data.languages.length === 0)}
                helperText={(hasSubmitted && (data.languages.length === 0)) ? "Must not be empty" : ""}
                {...params}
                label="Languages" />
            )}
          />
        </Grid>
        <Grid item container xs={12} rowGap={3} columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="duration"
              label="Duration"
              type="number"
              value={data.duration}
              helperText={(hasSubmitted && (data.duration === "")) ? "Must not be empty" : "Must be between 10 and 120"}
              error={hasSubmitted && (data.duration === "" || data.duration < 10 || data.duration > 120)}
              onChange={(e) => setData(prev => ({ ...prev, duration: e.target.value }))}
              placeholder="Minutes"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="passPercent"
              label="Passing Criteria"
              type="number"
              value={data.passPercentage}
              error={hasSubmitted && (data.passPercentage === "" || data.passPercentage < 10 || data.passPercentage > 100)}
              onChange={(e) => setData(prev => ({ ...prev, passPercentage: e.target.value }))}
              placeholder="Percentage (%)"
              helperText={hasSubmitted && (data.passPercentage === "") ? "Must not be empty" : "Must be between 10 and 100"}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>

```
The code above was created by adapting the code in [Inputs - Official Material CSS UI Components](https://mui.com/material-ui/all-components/#inputs) as shown below: 

```
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];


```
- The code in [Inputs - Official Material CSS UI Components](https://mui.com/material-ui/all-components/#inputs) was implemented by thoroughly studying original component. After understanding its functionality and source code, I adapted the code to suit the requirements of my assignment.
- [Inputs - Official Material CSS UI Components](https://mui.com/material-ui/all-components/#inputs) Code was used because I believed it would be a valuable foundation for my assignment. The original code provided useful insights into the problem domain, allowed me to explore different approaches and learn specific techniques. My goal was to get the base knowledge about different components available and how it can be efficiently implemented, considering my project requirements. I believe incorporating well-implemented code from external sources would help me achieve the desired functionality and results, along with speeding up my development process.
- [Inputs - Official Material CSS UI Components](https://mui.com/material-ui/all-components/#inputs) Code was modified by altering it according to the need of component with major changes in code like adding or updating attributes and properties, adding or removing inner components as required and integrating it with other components, along with updating the content based on requirements of the module.

### Popup.jsx

*Lines 15 - 22*

```
<Dialog open={true} onClose={handleClose}>
  <DialogTitle>Code Assessment Created</DialogTitle>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>

```
The code above was created by adapting the code in [Dialog - Official Material CSS UI Components](https://mui.com/material-ui/react-dialog/) as shown below: 

```
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

```
- The code in [Dialog - Official Material CSS UI Components](https://mui.com/material-ui/react-dialog/) was implemented by thoroughly studying original component. After understanding its functionality and source code, I adapted the code to suit the requirements of my assignment.
- [Dialog - Official Material CSS UI Components](https://mui.com/material-ui/react-dialog/) Code was used because I believed it would be a valuable foundation for my assignment. The original code provided useful insights into the problem domain, allowed me to explore different approaches and learn specific techniques. My goal was to get the base knowledge about different components available and how it can be efficiently implemented, considering my project requirements. I believe incorporating well-implemented code from external sources would help me achieve the desired functionality and results, along with speeding up my development process.
- [Dialog - Official Material CSS UI Components](https://mui.com/material-ui/react-dialog/) Code was modified by altering it according to the need of component with major changes in code like adding or updating attributes and properties, adding or removing inner components as required and integrating it with other components, along with updating the content based on requirements of the module.

### InterviewForm.jsx

*Lines 79 - 104*

```
<Grid item xs={12}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateTimePicker']}>
      <DateTimePicker
        label="Start Time"
        value={(interviewData.startTime !== "") ? dayjs(interviewData.startTime) : null}
        disabled={interviewData.candidate.userId === null || interviewData.candidate.userId === ""}
        minDateTime={dayjs()}
        onChange={(value) => {
          setInterviewData(prev => ({ ...prev, startTime: value.format('YYYY-MM-DD HH:mm:ss') }))
          setInterviewData(prev => ({ ...prev, endTime: "" }))
        }} />
    </DemoContainer>
  </LocalizationProvider>
</Grid>
<Grid item xs={12}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateTimePicker']}>
      <DateTimePicker
        label="End Time"
        value={(interviewData.endTime !== "") ? dayjs(interviewData.endTime) : null}
        minDateTime={dayjs(interviewData.startTime)}
        disabled={interviewData.candidate.userId === null || interviewData.candidate.userId === "" ||
          interviewData.startTime === null || interviewData.startTime === ""}
        onChange={(value) => setInterviewData(prev => ({ ...prev, endTime: value.format('YYYY-MM-DD HH:mm:ss') }))} />
    </DemoContainer>
  </LocalizationProvider>
</Grid>

```
The code above was created by adapting the code in [Date Time Picker - Official Material CSS UI Components](https://mui.com/x/react-date-pickers/date-time-picker/) as shown below: 

```
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
```
- The code in [Date Time Picker - Official Material CSS UI Components](https://mui.com/x/react-date-pickers/date-time-picker/) was implemented by thoroughly studying original component. After understanding its functionality and source code, I adapted the code to suit the requirements of my assignment.
- [Date Time Picker - Official Material CSS UI Components](https://mui.com/x/react-date-pickers/date-time-picker/) Code was used because I believed it would be a valuable foundation for my assignment. The original code provided useful insights into the problem domain, allowed me to explore different approaches and learn specific techniques. My goal was to get the base knowledge about different components available and how it can be efficiently implemented, considering my project requirements. I believe incorporating well-implemented code from external sources would help me achieve the desired functionality and results, along with speeding up my development process.
- [Date Time Picker - Official Material CSS UI Components](https://mui.com/x/react-date-pickers/date-time-picker/) Code was modified by altering it according to the need of component with major changes in code like adding or updating attributes and properties, adding or removing inner components as required and integrating it with other components, along with updating the content based on requirements of the module.

### InterviewSchedule.jsx

*Lines 84 - 145*

```
<TableContainer sx={{ maxHeight: 440 }}>
  <Table stickyHeader>
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {interviewData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === "update" &&
                      <IconButton size="small" onClick={() => navigate("/interview", { state: { "interviewId": row.interviewId } })}>
                        <EditIcon style={{ color: '#5A5A5A' }} />
                      </IconButton>}
                    {column.id === "delete" &&
                      <IconButton size="small" onClick={() => {
                        deleteInterview(row.interviewId)
                        setInterviewData(prev => prev.filter(data => data.interviewId !== row.interviewId))
                      }}>
                        <DeleteIcon />
                      </IconButton>}
                    {column.id !== "update" && column.id !== "update" && value}
                    {column.id === "join" &&
                      <Button
                        onClick={() => handleCallJoin(row.interviewId)}
                        disabled={checkTime(row)}>
                        {INTERVIEWER === userType ? 'Start' : 'Join'}
                      </Button>
                    }
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  </Table>
  </TableContainer>
  <TablePagination
  rowsPerPageOptions={[10, 25, 100]}
  component="div"
  count={interviewData.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  />
```
The code above was created by adapting the code in [Table Pagination - Official Material CSS UI Components](https://mui.com/base-ui/react-table-pagination/) as shown below: 

```
import * as React from 'react';
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';

export default function TableUnstyled() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root sx={{ maxWidth: '100%', width: 500 }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Dessert</th>
            <th>Calories</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td style={{ width: 160 }} align="right">
                {row.calories}
              </td>
              <td style={{ width: 160 }} align="right">
                {row.fat}
              </td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  }
  `,
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

```
- The code in [Table Pagination - Official Material CSS UI Components](https://mui.com/base-ui/react-table-pagination/) was implemented by thoroughly studying original component. After understanding its functionality and source code, I adapted the code to suit the requirements of my assignment.
- [Table Pagination - Official Material CSS UI Components](https://mui.com/base-ui/react-table-pagination/) Code was used because I believed it would be a valuable foundation for my assignment. The original code provided useful insights into the problem domain, allowed me to explore different approaches and learn specific techniques. My goal was to get the base knowledge about different components available and how it can be efficiently implemented, considering my project requirements. I believe incorporating well-implemented code from external sources would help me achieve the desired functionality and results, along with speeding up my development process.
- [Table Pagination - Official Material CSS UI Components](https://mui.com/base-ui/react-table-pagination/)9 Code was modified by altering it according to the need of component with major changes in code like adding or updating attributes and properties, adding or removing inner components as required and integrating it with other components, along with updating the content based on requirements of the module.


### InterviewTimeValidator.jsx

*Lines 52 - 73*

```
<Card sx={{ maxWidth: 500 }}>
    <CardMedia
      component="img"
      height="250"
      sx={{ objectFit: "fill" }}
      image={CalendarImage}
      title="Interview Not Started"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Interview Not Started
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Interview starts at {cardContent.startTime}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small" onClick={handleHomeClick}>
        Exit
      </Button>
    </CardActions>
  </Card>
```

The code above was created by adapting the code in [Material UI](https://mui.com/material-ui/react-card/#media) as shown below:


```
<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
    image="/static/images/cards/contemplative-reptile.jpg"
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
```

- The code in [Material UI](https://mui.com/material-ui/react-card/#media) was implemented by MUI team.
- [Material UI](https://mui.com/material-ui/react-card/#media) This code was used to implement responsive Card component.
- [Material UI](https://mui.com/material-ui/react-card/#media) This code was modified by changing internal sub components to meet my features need.

### WebsocketVideoConfig.java

*Lines 20 - 22*

```
@Configuration
@EnableWebSocket
public class WebSocketVideoConfig implements WebSocketConfigurer {

    @Autowired
    private VideoChatService videoChatService;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(videoChatService, ENDPOINT).setAllowedOrigins("*");
    }
}

```

The code above was created by adapting the code in [Spring Framework](https://docs.spring.io/spring-framework/reference/web/websocket/server.html) as shown below:

```
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(myHandler(), "/myHandler");
	}

	@Bean
	public WebSocketHandler myHandler() {
		return new MyHandler();
	}

}
```

- The code in [Spring Framework](https://docs.spring.io/spring-framework/reference/web/websocket/server.html) was implemented by Spring Framework team.
- [Spring Framework](https://docs.spring.io/spring-framework/reference/web/websocket/server.html) 's Code was used because I want to follow best practice to create a web socket handler in Spring Boot.
- [Spring Framework](https://docs.spring.io/spring-framework/reference/web/websocket/server.html)'s Code was modified by registering my @Service class instead of @Bean handler as shown in the documentation.




## Acknowledgments

* Insights from the demo of the Tutorial - 4 were helpful in quickly creating navigations.
* Custum creative images in the Homepage were generated using Gemini AI.

