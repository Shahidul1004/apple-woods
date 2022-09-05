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

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);
  const desktop = useMediaQuery("(min-width:1000px)");
  const mobile = useMediaQuery("(max-width:550px)");

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false && (
        <HomePageStyle desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
          <ContainerStyle desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
            <Image
              src={homepageInfo.imageSrc}
              alt={homepageInfo.imageSrc}
              width="1000px"
              height="325px"
              layout="intrinsic"
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
            <Title
              style={{
                fontSize: desktop ? "36px" : mobile ? "20px" : "25px",
                marginTop: "15px",
              }}
            >
              {context.lang === langOptions.EN
                ? homepageInfo.titleEN
                : homepageInfo.titleES}
            </Title>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                sx={{
                  width: { sx: "100%", sm: "50%" },
                  padding: "0px 5px",
                  fontSize: desktop ? "18px" : mobile ? "15px" : "17px",
                }}
              >
                {context.lang === langOptions.EN
                  ? homepageInfo.info_01_EN
                  : homepageInfo.info_01_ES}
              </Text>

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
              <Text
                sx={{
                  width: { sx: "100%", sm: "50%" },
                  padding: "10px 10px",
                  backgroundColor: "#f7f4ef",
                  fontSize: desktop ? "18px" : mobile ? "15px" : "17px",
                }}
              >
                {context.lang === langOptions.EN
                  ? homepageInfo.info_02_EN
                  : homepageInfo.info_02_ES}
              </Text>
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

            <Text
              sx={{
                padding: "0px 10px",
                marginBottom: "5px",
                fontSize: desktop ? "17px" : mobile ? "14px" : "16px",
                fontFamily: "Roboto",
              }}
            >
              {context.lang === langOptions.EN
                ? homepageInfo.info_03_EN
                : homepageInfo.info_03_ES}
            </Text>
            <Text
              sx={{
                padding: "0px 10px",
                marginBottom: "5px",
                fontSize: desktop ? "17px" : mobile ? "14px" : "16px",
                fontFamily: "Roboto",
              }}
            >
              {context.lang === langOptions.EN
                ? homepageInfo.info_04_EN
                : homepageInfo.info_04_ES}
            </Text>
            <Text
              sx={{
                padding: "0px 10px",
                marginBottom: "5px",
                fontSize: desktop ? "17px" : mobile ? "14px" : "16px",
                fontFamily: "Roboto",
              }}
            >
              {context.lang === langOptions.EN
                ? homepageInfo.info_05_EN
                : homepageInfo.info_05_ES}
            </Text>
            <Text
              sx={{
                padding: "0px 10px",
                marginBottom: "5px",
                fontSize: desktop ? "17px" : mobile ? "14px" : "16px",
                fontFamily: "Roboto",
              }}
            >
              {context.lang === langOptions.EN
                ? homepageInfo.info_06_EN
                : homepageInfo.info_06_ES}
            </Text>
            <Text
              sx={{
                padding: "0px 10px",
                marginBottom: { xs: "40px", sm: "75px" },
                fontSize: desktop ? "17px" : mobile ? "14px" : "16px",
                fontFamily: "Roboto",
              }}
            >
              {context.lang === langOptions.EN
                ? homepageInfo.info_07_EN
                : homepageInfo.info_07_ES}
            </Text>
            <Footer />
          </ContainerStyle>
        </HomePageStyle>
      )}
    </>
  );
};

export default Home;

interface CustomBoxProps extends BoxProps {
  desktop: Number;
  mobile: Number;
}
const HomePageStyle = styled(Box)<CustomBoxProps>(({ mobile, desktop }) => ({
  position: "absolute",
  top: `${desktop ? "70px" : mobile ? "50px" : "60px"}`,
  left: "0px",
  width: "100vw",
  height: `${
    desktop
      ? "calc(100vh - 70px)"
      : mobile
      ? "calc(100vh - 50px)"
      : "calc(100vh - 60px)"
  }`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "white",
  boxSizing: "border-box",
  overflowX: "hidden",
}));

const ContainerStyle = styled(Box)<CustomBoxProps>(({ desktop, mobile }) => ({
  margin: `${
    desktop
      ? "10px 30px 0px 30px"
      : mobile
      ? "10px 15px 0px 15px"
      : "10px 30px 0px 30px"
  }`,
  maxWidth: "1000px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  position: "relative",
}));

const Title = styled(Typography)({
  fontFamily: "sabon",
  color: "#b18441",
  textAlign: "center",
  textAlignLast: "center",
});

const Text = styled(Typography)({
  fontFamily: "sabon",
  color: "black",
  textAlign: "left",
  textAlignLast: "left",
});
