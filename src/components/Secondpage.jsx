import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormLabel } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function Secondpage({ setsecondpage, setthirdpage, setFinaldata }) {
  const [from, setfrom] = React.useState(null);
  const [to, setto] = React.useState(null);
  const [companyname, setcompanyname] = React.useState("");
  const [jobpost, setjobpost] = React.useState("");
  const [desc, setdesc] = React.useState("");
  const [location, setlocation] = React.useState("");
  const [radioval, setradioval] = React.useState("No");
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      companyname,
      jobpost,
      desc,
      location,
      isworking: radioval,
      from: from?.toISOString().substring(0, 10),
      to: to?.toISOString().substring(0, 10),
    };
    setFinaldata((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };
  function Radiochange(event) {
    setradioval(event.target.value);
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Experience
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="companyName"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                autoFocus
                value={companyname}
                onChange={(e) => setcompanyname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="jobpost"
                label="Job Post"
                name="jobpost"
                value={jobpost}
                onChange={(e) => setjobpost(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="loc"
                label="Location"
                name="location"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="loc"
                label="Description"
                name="location"
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Currenty Working?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={radioval}
                  onChange={Radiochange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item container spacing={3}>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="From"
                    value={from}
                    onChange={(newValue) => {
                      setfrom(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="To"
                    value={to}
                    onChange={(newValue) => {
                      setto(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
              setthirdpage(true);
              setsecondpage(false);
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Secondpage;
