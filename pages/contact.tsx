import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/nav/footer";
import { Context, langOptions } from "../context";
import { contactInfo, contactPage_imgSrc } from "../staticInfo/contactInfo";

const Amenities = (props: any): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false && (
        <ContactPageStyle>
          <ContainerStyle>
            <Image
              src={contactPage_imgSrc}
              alt={contactPage_imgSrc}
              width="410px"
              height="297px"
            />

            <Title sx={{ marginTop: "25px" }}>
              {context.lang === langOptions.EN
                ? props.info.title_EN
                : props.info.title_ES}
            </Title>

            {context.lang === langOptions.EN &&
              props.info.points_EN.map((point: any) => (
                <TextSabon key={point}>{point}</TextSabon>
              ))}
            {context.lang === langOptions.ES &&
              props.info.points_ES.map((point: any) => (
                <TextSabon key={point}>{point}</TextSabon>
              ))}
            <TextSabon>{props.info.phone}</TextSabon>
            <TextSabon sx={{ marginBottom: { xs: "35px", sm: "70px" } }}>
              {props.info.email}
            </TextSabon>

            <Footer />
          </ContainerStyle>
        </ContactPageStyle>
      )}
    </>
  );
};

export default Amenities;

export async function getStaticProps() {
  const info = contactInfo;

  return {
    props: {
      info,
    },
  };
}

const ContactPageStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "0px",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "white",
  boxSizing: "border-box",
  overflowX: "hidden",

  [theme.breakpoints.up("xs")]: {
    top: "50px",
    height: "calc(100vh - 50px)",
  },
  [theme.breakpoints.up("sm")]: {
    top: "60px",
    height: "calc(100vh - 60px)",
  },
  [theme.breakpoints.up("md")]: {
    top: "70px",
    height: "calc(100vh - 70px)",
  },
}));

const ContainerStyle = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",

  [theme.breakpoints.up("xs")]: {
    margin: "10px 15px 0px 15px",
  },
  [theme.breakpoints.up("sm")]: {
    margin: "10px 30px 0px 30px",
  },
  [theme.breakpoints.up("md")]: {
    margin: "10px 30px 0px 30px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "sabon",
  color: "#b18441",
  textAlign: "center",
  textAlignLast: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "34px",
  },
}));

const TextSabon = styled(Typography)(({ theme }) => ({
  fontFamily: "sabon",
  color: "black",
  textAlign: "left",
  textAlignLast: "left",

  [theme.breakpoints.up("xs")]: {
    width: "100%",
    fontSize: "15px",
    padding: "5px 10px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "90%",
    fontSize: "17px",
    padding: "10px 10px",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
    fontSize: "18px",
    padding: "10px 10px",
  },
}));
