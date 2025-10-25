// import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({}) => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute" />
      <StyledToobar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
      </StyledToobar>
    </>
  );
};

export default NavBar;
