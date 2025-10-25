// import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: theme.shadows[4],
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
