import { Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    // backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="primary" variant="h1" textAlign={"center"}>
                Ricardo Fidelis
              </Typography>
              <Typography color="primary" variant="h2" textAlign={"center"}>
                I'm a Web Developer
              </Typography>

              <Grid container display={"flex"} justifyContent={"center"}>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <button>
                    <DownloadIcon /> Download CV
                  </button>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <button>
                    <EmailIcon /> Contact me
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
