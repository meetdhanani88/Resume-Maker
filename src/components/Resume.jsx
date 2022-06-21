import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import "./Resume.css";

export default function Resume({ Finaldata }) {
  console.log(Finaldata);

  const skillval = () => {
    let skill = [];
    for (const [key, value] of Object.entries(Finaldata.skill)) {
      if (value) {
        skill.push(key);
      }
    }
    return skill;
  };
  const langval = () => {
    let lang = [];
    for (const [key, value] of Object.entries(Finaldata.lang)) {
      if (value) {
        lang.push(key);
      }
    }
    return lang;
  };

  return (
    <Grid container justifyContent={"center"}>
      <Box sx={{ minWidth: 900 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="rescontainer">
              <div className="resheader">
                <Grid
                  container
                  direction={"column"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                >
                  <h3>
                    Full name:{Finaldata.first} {Finaldata.last}
                  </h3>
                  <p>Birthdate:{Finaldata.birthdate}</p>
                  <p>About:{Finaldata.about}</p>
                  <p>email:{Finaldata.email}</p>
                </Grid>
              </div>
              <div className="resleft">
                <Grid
                  container
                  direction={"column"}
                  justifyContent="flex-start"
                  alignItems={"flex-start"}
                  sx={{ ml: 3 }}
                >
                  <h3>Education</h3>

                  <p>Colleage:{Finaldata.clgname}</p>
                  <p>About:{Finaldata.clgabout}</p>
                  <p>Location:{Finaldata.clglocation}</p>
                  <p>
                    <span>From:{Finaldata.fromclg}</span>
                    <span> to:{Finaldata.toclg}</span>
                  </p>

                  <h3>Experience</h3>

                  <p>companyname:{Finaldata.companyname}</p>
                  <p>jobpost:{Finaldata.jobpost}</p>
                  <p>Location:{Finaldata.location}</p>
                  <p>
                    <span>From:{Finaldata.from}</span>
                    <span> to:{Finaldata.to}</span>
                  </p>
                  <p>Working now :{Finaldata.isworking}</p>
                </Grid>
              </div>
              <div className="resright">
                <Grid
                  container
                  direction={"column"}
                  justifyContent="flex-start"
                  alignItems={"flex-start"}
                  sx={{ ml: 3 }}
                >
                  <h3>Projects</h3>
                  <p>Project Name:{Finaldata.prjname}</p>
                  <p>Project Role:{Finaldata.prjrole}</p>
                  <p>Project Description:{Finaldata.prjdesc}</p>

                  <h3>Skills</h3>
                  {skillval().map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                  <h3>Languages</h3>
                  {langval().map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </Grid>
              </div>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
