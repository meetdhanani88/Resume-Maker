import * as React from "react";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Resume from "./Resume";
const theme = createTheme();

export default function SignUp() {
  const [mainpage, setmainpage] = React.useState(true);
  const [secondpage, setsecondpage] = React.useState(false);
  const [thirdpage, setthirdpage] = React.useState(false);
  const [fourthpage, setfourthpage] = React.useState(false);
  const [Finaldata, setFinaldata] = React.useState(false);
  const [showresume, setshowresume] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {mainpage && (
            <Firstpage
              setmainpage={setmainpage}
              setsecondpage={setsecondpage}
              setFinaldata={setFinaldata}
            ></Firstpage>
          )}
          {secondpage && (
            <Secondpage
              setsecondpage={setsecondpage}
              setthirdpage={setthirdpage}
              setFinaldata={setFinaldata}
            ></Secondpage>
          )}
          {thirdpage && (
            <Thirdpage
              setfourthpage={setfourthpage}
              setthirdpage={setthirdpage}
              setFinaldata={setFinaldata}
            ></Thirdpage>
          )}
          {fourthpage && (
            <Fourthpage
              setfourthpage={setfourthpage}
              setshowresume={setshowresume}
              setFinaldata={setFinaldata}
            ></Fourthpage>
          )}
          {showresume && <Resume Finaldata={Finaldata}></Resume>}
        </Container>
      </ThemeProvider>
    </>
  );
}
