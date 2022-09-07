import { Box, Divider, styled, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/nav/footer";
import { Context, langOptions } from "../context";
import {
  information_07,
  information_08,
  residentialInfo,
} from "../staticInfo/residentialInfo";

const Residential = (props: any): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false && (
        <LocationPageStyle>
          <ContainerStyle>
            <Image
              src={residentialInfo.imageSrc_01}
              alt={residentialInfo.imageSrc_01}
              width="980px"
              height="320px"
            />
            <Box
              sx={{
                position: "absolute",
                top: { xs: "15px", sm: "30px", md: "40px" },
                left: { xs: "15px", sm: "30px", md: "40px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "22px", md: "30px" },
                  fontFamily: "Roboto",
                  width: { xs: "170px", sm: "280px", md: "300px" },
                  fontWeight: "600",
                  color: "#bcb5aa",
                  paddingLeft: { xs: "10px", sm: "20px" },
                  borderLeft: "2px solid #616e89",
                }}
              >
                {context.lang === langOptions.EN
                  ? residentialInfo.image_01_Text_EN
                  : residentialInfo.image_01_Text_ES}
              </Typography>
            </Box>
            <Title sx={{ marginTop: "15px" }}>
              {context.lang === langOptions.EN
                ? props.title_01_EN
                : props.title_01_ES}
            </Title>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "80%", md: "60%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <TextSabon style={{ width: "100%" }}>
                  {context.lang === langOptions.EN
                    ? props.info_01_EN
                    : props.info_01_ES}
                </TextSabon>
                <Image
                  src={residentialInfo.imageSrc_02}
                  alt={residentialInfo.imageSrc_02}
                  width="452px"
                  height="83px"
                />
              </Box>

              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "70%",
                  height: "1px",
                  backgroundColor: "#d8b47d",
                  margin: "10px 0px",
                  border: "none",
                }}
              />
              <TextSabon sx={{ backgroundColor: "#f7f4ef" }}>
                {context.lang === langOptions.EN
                  ? props.info_02_EN
                  : props.info_02_ES}
              </TextSabon>
            </Box>
            <Divider
              orientation="horizontal"
              sx={{
                width: "90%",
                height: "2px",
                backgroundColor: "#f7f4ef",
                margin: { xs: "15px 0px", sm: "25px 0px" },
                border: "none",
              }}
            />
            <Title>
              {context.lang === langOptions.EN
                ? props.title_02_EN
                : props.title_02_ES}
            </Title>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-evenly",
                alignItems: { xs: "center", sm: "flex-start" },
                gap: { xs: "0px", sm: "10px" },
                marginBottom: { xs: "5px", sm: "10px", md: "20px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: { xs: "100%", sm: "50%" },
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <TextSabon
                  style={{ color: "#b18441", width: "100%", paddingTop: "0px" }}
                >
                  {context.lang === langOptions.EN
                    ? props.info_03_title_EN
                    : props.info_03_title_ES}
                </TextSabon>
                <TextRoboto>
                  {context.lang === langOptions.EN
                    ? props.info_03_text_EN
                    : props.info_03_text_ES}
                </TextRoboto>
              </Box>

              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "block", sm: "none" },
                  width: "90%",
                  height: "1px",
                  backgroundColor: "#d8b47d",
                  margin: "10px 0px",
                  border: "none",
                }}
              />
              <TextSabon sx={{ backgroundColor: "#f7f4ef" }}>
                {context.lang === langOptions.EN
                  ? props.info_04_EN
                  : props.info_04_ES}
              </TextSabon>
            </Box>

            <Image
              src={residentialInfo.imageSrc_03}
              alt={residentialInfo.imageSrc_03}
              width="978px"
              height="507px"
            />

            <Title sx={{ marginTop: "5px" }}>
              {context.lang === langOptions.EN
                ? props.title_03_EN
                : props.title_03_ES}
            </Title>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <TextRoboto
                  sx={{
                    fontWeight: "500",
                    color: "#b18441",
                  }}
                >
                  {context.lang === langOptions.EN
                    ? props.info_05_title_EN
                    : props.info_05_title_ES}
                </TextRoboto>
                <TextRoboto>
                  {context.lang === langOptions.EN
                    ? props.info_05_text_EN
                    : props.info_05_text_ES}
                </TextRoboto>
              </Box>

              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "block", sm: "none" },
                  width: "70%",
                  height: "1px",
                  backgroundColor: "#d8b47d",
                  margin: "10px 0px",
                  border: "none",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <TextRoboto
                  sx={{
                    fontWeight: "500",
                    color: "#b18441",
                  }}
                >
                  {context.lang === langOptions.EN
                    ? props.info_06_title_EN
                    : props.info_06_title_ES}
                </TextRoboto>
                <TextRoboto style={{ width: "100%" }}>
                  {context.lang === langOptions.EN
                    ? props.info_06_text_EN
                    : props.info_06_text_ES}
                </TextRoboto>
              </Box>
            </Box>

            <Divider
              orientation="horizontal"
              sx={{
                width: "90%",
                height: "2px",
                backgroundColor: "#f7f4ef",
                margin: { xs: "15px 0px", sm: "25px 0px" },
                border: "none",
              }}
            />

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-around",
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: { xs: "90%", sm: "40%" },
                }}
              >
                <TextRoboto
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  {context.lang === langOptions.EN
                    ? props.info_07.title_EN
                    : props.info_07.title_ES}
                </TextRoboto>
                {context.lang === langOptions.EN &&
                  props.info_07.points_EN.map((info: any) => (
                    <TextSabon style={{ width: "100%" }} key={info}>
                      {info}
                    </TextSabon>
                  ))}
                {context.lang === langOptions.ES &&
                  props.info_07.points_ES.map((info: any) => (
                    <TextSabon style={{ width: "100%" }} key={info}>
                      {info}
                    </TextSabon>
                  ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: { xs: "90%", sm: "40%" },
                }}
              >
                <TextRoboto
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  {context.lang === langOptions.EN
                    ? props.info_08.title_EN
                    : props.info_08.title_ES}
                </TextRoboto>
                {context.lang === langOptions.EN &&
                  props.info_08.points_EN.map((info: any) => (
                    <TextSabon style={{ width: "100%" }} key={info}>
                      {info}
                    </TextSabon>
                  ))}
                {context.lang === langOptions.ES &&
                  props.info_08.points_ES.map((info: any) => (
                    <TextSabon style={{ width: "100%" }} key={info}>
                      {info}
                    </TextSabon>
                  ))}
              </Box>
            </Box>

            <Divider
              orientation="horizontal"
              sx={{
                width: "90%",
                height: "2px",
                backgroundColor: "#f7f4ef",
                margin: { xs: "15px 0px", sm: "25px 0px" },
                border: "none",
              }}
            />

            <Title>
              {context.lang === langOptions.EN
                ? props.title_04_EN
                : props.title_04_ES}
            </Title>

            <Image
              src={residentialInfo.imageSrc_04}
              alt={residentialInfo.imageSrc_04}
              width="754px"
              height="56px"
            />

            <Box sx={{ marginTop: "20px" }}>
              <Footer />
            </Box>
          </ContainerStyle>
        </LocationPageStyle>
      )}
    </>
  );
};

export default Residential;

export async function getStaticProps() {
  const title_01_EN = residentialInfo.title_01_EN;
  const title_01_ES = residentialInfo.title_01_ES;
  const title_02_EN = residentialInfo.title_02_EN;
  const title_02_ES = residentialInfo.title_02_ES;
  const title_03_EN = residentialInfo.title_03_EN;
  const title_03_ES = residentialInfo.title_03_ES;
  const title_04_EN = residentialInfo.title_04_EN;
  const title_04_ES = residentialInfo.title_04_ES;

  const info_01_EN = residentialInfo.info_01_EN;
  const info_01_ES = residentialInfo.info_01_ES;
  const info_02_EN = residentialInfo.info_02_EN;
  const info_02_ES = residentialInfo.info_02_ES;
  const info_03_title_EN = residentialInfo.info_03_title_EN;
  const info_03_title_ES = residentialInfo.info_03_title_ES;
  const info_03_text_EN = residentialInfo.info_03_text_EN;
  const info_03_text_ES = residentialInfo.info_03_text_ES;
  const info_04_EN = residentialInfo.info_04_EN;
  const info_04_ES = residentialInfo.info_04_ES;
  const info_05_title_EN = residentialInfo.info_05_title_EN;
  const info_05_title_ES = residentialInfo.info_05_title_ES;
  const info_05_text_EN = residentialInfo.info_05_text_EN;
  const info_05_text_ES = residentialInfo.info_05_text_ES;
  const info_06_title_EN = residentialInfo.info_06_title_EN;
  const info_06_title_ES = residentialInfo.info_06_title_ES;
  const info_06_text_EN = residentialInfo.info_06_text_EN;
  const info_06_text_ES = residentialInfo.info_06_text_ES;

  const info_07 = information_07;
  const info_08 = information_08;

  return {
    props: {
      title_01_EN,
      title_01_ES,
      title_02_EN,
      title_02_ES,
      title_03_EN,
      title_03_ES,
      title_04_EN,
      title_04_ES,
      info_01_EN,
      info_01_ES,
      info_02_EN,
      info_02_ES,
      info_03_title_EN,
      info_03_title_ES,
      info_03_text_EN,
      info_03_text_ES,
      info_04_EN,
      info_04_ES,
      info_05_title_EN,
      info_05_title_ES,
      info_05_text_EN,
      info_05_text_ES,
      info_06_title_EN,
      info_06_title_ES,
      info_06_text_EN,
      info_06_text_ES,

      info_07,
      info_08,
    },
  };
}

const LocationPageStyle = styled(Box)(({ theme }) => ({
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
  gap: "15px",
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
  padding: "10px 10px",

  [theme.breakpoints.up("xs")]: {
    width: "100%",
    fontSize: "15px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    fontSize: "17px",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    fontSize: "18px",
  },
}));

const TextRoboto = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  color: "black",
  padding: "0px 10px",
  marginBottom: "5px",
  textAlign: "left",
  textAlignLast: "left",

  [theme.breakpoints.up("xs")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "17px",
  },
}));
