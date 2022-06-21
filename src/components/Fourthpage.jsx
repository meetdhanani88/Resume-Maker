import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormControl } from "@mui/material";

function Fourthpage({ setfourthpage, setshowresume, setFinaldata }) {
  const [skill, setskill] = React.useState({
    React: true,
    Anguler: false,
  });
  const [lang, setlang] = React.useState({
    English: true,
    Hindi: false,
  });
  const [prjname, setprjname] = React.useState("");
  const [prjrole, setprjrole] = React.useState("");
  const [prjdesc, setprjdesc] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      prjname,
      prjrole,
      prjdesc,
      skill,
      lang,
    };
    setFinaldata((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  function handelskill(event) {
    setskill((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.checked,
      };
    });
  }
  function handellang(event) {
    setlang((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.checked,
      };
    });
  }

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
          Projects
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="prjName"
                required
                fullWidth
                id="prjName"
                label="Project Name"
                autoFocus
                value={prjname}
                onChange={(e) => setprjname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="prjdesc"
                label="Project Description"
                name="prjdesc"
                multiline
                rows={2}
                value={prjdesc}
                onChange={(e) => setprjdesc(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="prjrole"
                label="Project Role"
                name="prjrole"
                value={prjrole}
                onChange={(e) => setprjrole(e.target.value)}
              />
            </Grid>

            <Grid item container xs={12}>
              <Grid item xs={6}>
                <FormControl
                  size="medium"
                  sx={{ mt: 2, minWidth: 200 }}
                  fullWidth
                >
                  <label>Skiils</label>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(event) => handelskill(event)}
                        inputProps={{ "aria-label": "controlled" }}
                        checked={skill.React}
                        name="React"
                      />
                    }
                    label="React-js"
                  ></FormControlLabel>

                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(event) => handelskill(event)}
                        inputProps={{ "aria-label": "controlled" }}
                        checked={skill.Anguler}
                        name="Anguler"
                      />
                    }
                    label="Angular"
                  ></FormControlLabel>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  size="medium"
                  sx={{ mt: 2, minWidth: 200 }}
                  fullWidth
                >
                  <label>Languages</label>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={lang.English}
                        onChange={(event) => handellang(event)}
                        inputProps={{ "aria-label": "controlled" }}
                        name="English"
                      />
                    }
                    label="English"
                  ></FormControlLabel>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={lang.Hindi}
                        onChange={(event) => handellang(event)}
                        inputProps={{ "aria-label": "controlled" }}
                        name="Hindi"
                      />
                    }
                    label="Hindi"
                  ></FormControlLabel>
                </FormControl>
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
              setfourthpage(false);
              setshowresume(true);
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Fourthpage;
