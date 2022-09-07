import { Box, Button, styled, Typography } from "@mui/material";
import Image from "next/image";

type props = {
  imgSrc: string;
  buttonTxt: string;
  name: string;
  descrip: string;
};

const HouseCard = ({
  imgSrc,
  buttonTxt,
  name,
  descrip,
}: props): JSX.Element => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "161.19px",
            sm: "166.789px",
            md: "177.98px",
          },
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <Image src={imgSrc} alt={imgSrc} layout="fill" objectFit="contain" />
        <Button
          sx={{
            top: "15px",
            left: "15px",
            fontSize: { xs: "12px", sm: "14px" },
            padding: "4px 8px",
            backgroundColor: "#bcb5aa",
            ":hover": {
              backgroundColor: "#98876e",
            },
          }}
          variant="contained"
        >
          {buttonTxt}
        </Button>
      </Box>

      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <TextSabon
          sx={{
            fontWeight: "600",
            color: "#000000c2",
            fontFamily: "sabon",
          }}
        >
          {name}
        </TextSabon>
        <TextSabon
          sx={{
            fontSize: { xs: "15px", sm: "16px", md: "17px", color: "#554f4f" },
          }}
        >
          {descrip}
        </TextSabon>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Image
            src="/housesPage_Icon_newTag.webp"
            alt="/housesPage_Icon_newTag.webp"
            width="17px"
            height="20px"
          />
          <Image
            src="/housesPage_Icon_bathroom.webp"
            alt="/housesPage_Icon_bathroom.webp"
            width="27px"
            height="15px"
          />
          <Text>2</Text>
          <Image
            src="/housesPage_Icon_garage.webp"
            alt="/housesPage_Icon_garage.webp"
            width="29px"
            height="17px"
          />
          <Text>2</Text>
          <Image
            src="/housesPage_Icon_space.webp"
            alt="/housesPage_Icon_space.webp"
            width="24px"
            height="16px"
          />
          <Text>120 sq ft</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default HouseCard;

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "5px",
  border: "1px solid #fbf8f8",
  boxSizing: "border-box",

  ":hover": {
    boxShadow: "0 0 50px rgb(0 0 0 / 10%)",
  },

  [theme.breakpoints.up("xs")]: {
    width: "290px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
  [theme.breakpoints.up("md")]: {
    width: "320px",
  },
}));

const TextSabon = styled(Typography)(({ theme }) => ({
  fontFamily: "sabon",
  color: "black",
  textAlign: "left",
  textAlignLast: "left",
  padding: "0px 10px",

  [theme.breakpoints.up("xs")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "19px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
}));

const Text = styled(Typography)({
  marginLeft: "-5px",
  fontSize: "13px",
  color: "#554f4f",
});
