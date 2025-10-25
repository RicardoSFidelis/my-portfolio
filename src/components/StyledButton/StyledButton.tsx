import styled from "@emotion/styled";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px, 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default StyledButton;

const StyledImg = styled("img")(() => ({
  width: "100%",
  borderRadius: "50%",
}));
