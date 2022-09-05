import { Typography } from "@mui/material";

const Footer = (): JSX.Element => {
  return (
    <footer
      style={{
        fontFamily: "Montserrat",
        color: "#777171",
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "13px" },
        }}
      >
        &copy; 2019 APPLE WOODS RESIDENTIAL Structured Living
      </Typography>
    </footer>
  );
};

export default Footer;
