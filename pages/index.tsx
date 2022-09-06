import {
  Box,
  BoxProps,
  Divider,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/nav/footer";
import { Context, langOptions } from "../context";
import { homepageInfo } from "../staticInfo/homeInfo";

const Home: NextPage = (props: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading === false && (
        <HomePageStyle>
          <ContainerStyle>
            <Image
              src={homepageInfo.imageSrc}
              alt={homepageInfo.imageSrc}
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
                  fontSize: { xs: "13px", sm: "20px", md: "28px" },
                  fontFamily: "Roboto",
                  width: { xs: "170px", sm: "280px", md: "300px" },
                  fontWeight: "600",
                  color: "white",
                  paddingLeft: { xs: "10px", sm: "20px" },
                  borderLeft: "2px solid #616e89",
                }}
              >
                {context.lang === langOptions.EN
                  ? homepageInfo.imageText_EN
                  : homepageInfo.imageText_ES}
              </Typography>
            </Box>
            <Title>
              {context.lang === langOptions.EN
                ? props.title_EN
                : props.title_ES}
            </Title>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextSabon>
                {context.lang === langOptions.EN
                  ? props.info_01_EN
                  : props.info_01_ES}
              </TextSabon>

              <Divider
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: "2px",
                  height: "100%",
                  backgroundColor: "#d8b47d",
                  margin: "0px 20px",
                  border: "none",
                }}
              />
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

            <TextRoboto>
              {context.lang === langOptions.EN
                ? props.info_03_EN
                : props.info_03_ES}
            </TextRoboto>
            <TextRoboto>
              {context.lang === langOptions.EN
                ? props.info_04_EN
                : props.info_04_ES}
            </TextRoboto>
            <TextRoboto>
              {context.lang === langOptions.EN
                ? props.info_05_EN
                : props.info_05_ES}
            </TextRoboto>
            <TextRoboto>
              {context.lang === langOptions.EN
                ? props.info_06_EN
                : props.info_06_ES}
            </TextRoboto>
            <TextRoboto
              sx={{
                marginBottom: { xs: "40px", sm: "75px" },
              }}
            >
              {context.lang === langOptions.EN
                ? props.info_07_EN
                : props.info_07_ES}
            </TextRoboto>
            <Footer />
          </ContainerStyle>
        </HomePageStyle>
      )}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const title_EN = homepageInfo.titleEN;
  const title_ES = homepageInfo.titleES;
  const info_01_EN = homepageInfo.info_01_EN;
  const info_01_ES = homepageInfo.info_01_ES;
  const info_02_EN = homepageInfo.info_02_EN;
  const info_02_ES = homepageInfo.info_02_ES;
  const info_03_EN = homepageInfo.info_03_EN;
  const info_03_ES = homepageInfo.info_03_ES;
  const info_04_EN = homepageInfo.info_04_EN;
  const info_04_ES = homepageInfo.info_04_ES;
  const info_05_EN = homepageInfo.info_05_EN;
  const info_05_ES = homepageInfo.info_05_ES;
  const info_06_EN = homepageInfo.info_06_EN;
  const info_06_ES = homepageInfo.info_06_ES;
  const info_07_EN = homepageInfo.info_07_EN;
  const info_07_ES = homepageInfo.info_07_ES;

  return {
    props: {
      title_EN,
      title_ES,
      info_01_EN,
      info_01_ES,
      info_02_EN,
      info_02_ES,
      info_03_EN,
      info_03_ES,
      info_04_EN,
      info_04_ES,
      info_05_EN,
      info_05_ES,
      info_06_EN,
      info_06_ES,
      info_07_EN,
      info_07_ES,
    },
  };
}

const HomePageStyle = styled(Box)(({ theme }) => ({
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
  marginTop: "15px",
  textAlign: "center",
  textAlignLast: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "36px",
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
