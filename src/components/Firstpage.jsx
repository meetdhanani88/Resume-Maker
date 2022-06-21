import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Firstpage({ setmainpage, setsecondpage, setFinaldata }) {
  const [date, setdate] = React.useState(null);
  const [first, setfirst] = React.useState("");
  const [last, setlast] = React.useState("");
  const [email, setemail] = React.useState("");
  const [about, setabout] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      first,
      last,
      email,
      about,
      birthdate: date?.toISOString().substring(0, 10),
    };
    setFinaldata((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create Resume
      </Typography>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={first}
              onChange={(e) => setfirst(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={last}
              onChange={(e) => setlast(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="About"
              label="About"
              type="text"
              id="About"
              placeholder="About Your Self"
              multiline
              rows={2}
              value={about}
              onChange={(e) => setabout(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birth Date"
                value={date}
                onChange={(newValue) => {
                  setdate(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e) => {
            handleSubmit(e);
            setmainpage(false);
            setsecondpage(true);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Firstpage;
