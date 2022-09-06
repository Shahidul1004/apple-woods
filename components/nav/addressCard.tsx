import { Box, styled, Typography } from "@mui/material";

type props = {
  name: string;
  descrip: String;
  month: String;
  addr?: String;
  phone?: String;
  link?: String;
};

const AddressCard = ({
  name,
  descrip,
  month,
  addr,
  phone,
  link,
}: props): JSX.Element => {
  return (
    <Container>
      <TextRoboto
        sx={{
          fontWeight: "600",
          color: "black",
          fontSize: { xs: "14px", sm: "16px", md: "19px" },
          fontFamily: "sabon",
        }}
      >
        {name}
      </TextRoboto>
      <TextRoboto>{descrip}</TextRoboto>
      <TextRoboto>{month}</TextRoboto>
      <TextRoboto>{addr}</TextRoboto>
      <TextRoboto>{phone}</TextRoboto>
      <a href={`https://${link}`} target="_blank" rel="noreferrer">
        <TextRoboto sx={{ textDecorationLine: "underline" }}>{link}</TextRoboto>
      </a>
    </Container>
  );
};

export default AddressCard;

const Container = styled(Box)(({ theme }) => ({
  padding: "10px",
  backgroundColor: "#f7f7f7",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "5px",
  [theme.breakpoints.up("xs")]: {
    width: "290px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "330px",
  },
  [theme.breakpoints.up("md")]: {
    width: "420px",
  },
}));

const TextRoboto = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  color: "#313123",
  padding: "0px 10px",
  textAlign: "left",
  textAlignLast: "left",

  [theme.breakpoints.up("xs")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "17px",
  },
}));
