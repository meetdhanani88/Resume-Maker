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

function Thirdpage({ setfourthpage, setthirdpage, setFinaldata }) {
  const [fromclg, setfromclg] = React.useState(null);
  const [toclg, settoclg] = React.useState(null);
  const [clgname, setclgname] = React.useState("");
  const [clgabout, setclgabout] = React.useState("");
  const [clglocation, setclglocation] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      clgname,
      clglocation,
      clgabout,
      toclg: toclg?.toISOString().substring(0, 10),
      fromclg: fromclg?.toISOString().substring(0, 10),
    };
    setFinaldata((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  return (
    <>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Education
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="clgName"
                required
                fullWidth
                id="clgName"
                label="College Name"
                autoFocus
                value={clgname}
                onChange={(e) => setclgname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="clglocation"
                label="College Location"
                name="clglocation"
                value={clglocation}
                onChange={(e) => setclglocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="clgabout"
                label="About College"
                name="clgabout"
                multiline
                rows={2}
                value={clgabout}
                onChange={(e) => setclgabout(e.target.value)}
              />
            </Grid>

            <Grid item container spacing={3}>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="From"
                    value={fromclg}
                    onChange={(newValue) => {
                      setfromclg(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="To"
                    value={toclg}
                    onChange={(newValue) => {
                      settoclg(newValue);
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
              setthirdpage(false);
              setfourthpage(true);
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Thirdpage;
