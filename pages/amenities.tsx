import { Box, Divider, styled, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/nav/footer";
import { Context, langOptions } from "../context";
import {
  amenitiesInfo,
  info_03_obj,
  info_04_obj,
  info_05_obj,
  info_07_obj,
  info_08_obj,
  info_09_obj,
  info_10_obj,
} from "../staticInfo/amenitiesInfo";

const Amenities = (props: any): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false && (
        <AmenitiesPageStyle>
          <ContainerStyle>
            <Image
              src={amenitiesInfo.imageSrc_01}
              alt={amenitiesInfo.imageSrc_01}
              width="979px"
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
                  ? amenitiesInfo.image_01_Text_EN
                  : amenitiesInfo.image_01_Text_ES}
              </Typography>
            </Box>
            <Title sx={{ marginTop: "15px" }}>
              {context.lang === langOptions.EN
                ? props.title_01_EN
                : props.title_01_ES}
            </Title>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <TextSabon sx={{ maxWidth: "400px" }}>
                {context.lang === langOptions.EN
                  ? props.info_01_EN
                  : props.info_01_ES}
              </TextSabon>

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
              <TextSabon sx={{ backgroundColor: "#f7f4ef", maxWidth: "400px" }}>
                {context.lang === langOptions.EN
                  ? props.info_02_EN
                  : props.info_02_ES}
              </TextSabon>
            </Box>
            <Title sx={{ marginTop: "15px" }}>
              {context.lang === langOptions.EN
                ? props.title_02_EN
                : props.title_02_ES}
            </Title>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <TextSabon style={{ width: "100%", paddingTop: "0px" }}>
                  {context.lang === langOptions.EN
                    ? props.info_03.text_EN
                    : props.info_03.text_ES}
                </TextSabon>

                {context.lang === langOptions.EN &&
                  props.info_03.points_EN.map((point: any) => (
                    <TextSabon key={point} style={{ width: "100%" }}>
                      {point}
                    </TextSabon>
                  ))}
                {context.lang === langOptions.ES &&
                  props.info_03.points_ES.map((point: any) => (
                    <TextSabon key={point} style={{ width: "100%" }}>
                      {point}
                    </TextSabon>
                  ))}
              </Box>

              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "90%",
                  height: "1px",
                  backgroundColor: "#d8b47d",
                  margin: "10px 0px",
                  border: "none",
                }}
              />
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  backgroundColor: "#f7f4ef",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <TextSabon
                  style={{
                    width: "auto",
                    alignSelf: "center",
                  }}
                >
                  {context.lang === langOptions.EN
                    ? props.info_04.text_EN
                    : props.info_04.text_ES}
                </TextSabon>

                {context.lang === langOptions.EN &&
                  props.info_04.points_EN.map((point: any) => (
                    <TextSabon key={point} style={{ width: "100%" }}>
                      {point}
                    </TextSabon>
                  ))}
                {context.lang === langOptions.ES &&
                  props.info_04.points_ES.map((point: any) => (
                    <TextSabon key={point} style={{ width: "100%" }}>
                      {point}
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

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-evenly",
                alignItems: { xs: "center", sm: "flex-start" },
                gap: "20px",
              }}
            >
              <Image
                src={amenitiesInfo.imageSrc_02}
                alt={amenitiesInfo.imageSrc_02}
                width="600px"
                height="408px"
              />
              <Box
                sx={{
                  width: { xs: "80%", sm: "40%", md: "30%" },
                  paddingLeft: "20px",
                  backgroundColor: "#f7f4ef",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {context.lang === langOptions.EN &&
                  props.info_05.points_EN.map((point: any) => (
                    <TextSabon
                      key={point}
                      style={{ width: "100%" }}
                      sx={{
                        padding: { xs: "5px", md: "10px" },
                      }}
                    >
                      {point}
                    </TextSabon>
                  ))}
                {context.lang === langOptions.ES &&
                  props.info_05.points_ES.map((point: any) => (
                    <TextSabon key={point} style={{ width: "100%" }}>
                      {point}
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

            <Title sx={{ marginTop: "10px" }}>
              {context.lang === langOptions.EN
                ? props.title_03_EN
                : props.title_03_ES}
            </Title>
            <TextSabon style={{ width: "95%", fontWeight: "600" }}>
              {context.lang === langOptions.EN
                ? props.info_06_EN
                : props.info_06_ES}
            </TextSabon>

            <Box
              sx={{
                width: { xs: "100%", md: "90%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextRoboto
                sx={{
                  fontSize: { xs: "17px", sm: "17px", md: "21px" },
                  color: "#b18441",
                }}
              >
                {context.lang === langOptions.EN
                  ? props.info_07.text_EN
                  : props.info_07.text_ES}
              </TextRoboto>
              {context.lang === langOptions.EN &&
                props.info_07.points_EN.map((point: any) => (
                  <TextSabon
                    key={point}
                    style={{ width: "95%", paddingBottom: "0px" }}
                  >
                    {point}
                  </TextSabon>
                ))}
              {context.lang === langOptions.ES &&
                props.info_07.points_ES.map((point: any) => (
                  <TextSabon
                    key={point}
                    style={{ width: "95%", paddingBottom: "0px" }}
                  >
                    {point}
                  </TextSabon>
                ))}
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "90%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextRoboto
                sx={{
                  fontSize: { xs: "17px", sm: "17px", md: "21px" },
                  color: "#b18441",
                }}
              >
                {context.lang === langOptions.EN
                  ? props.info_08.text_EN
                  : props.info_08.text_ES}
              </TextRoboto>
              {context.lang === langOptions.EN &&
                props.info_08.points_EN.map((point: any) => (
                  <TextSabon
                    key={point}
                    style={{ width: "95%", paddingBottom: "0px" }}
                  >
                    {point}
                  </TextSabon>
                ))}
              {context.lang === langOptions.ES &&
                props.info_08.points_ES.map((point: any) => (
                  <TextSabon
                    key={point}
                    style={{ width: "95%", paddingBottom: "0px" }}
                  >
                    {point}
                  </TextSabon>
                ))}
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "90%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextRoboto
                sx={{
                  fontSize: { xs: "17px", sm: "17px", md: "21px" },
                  color: "#b18441",
                }}
              >
                {context.lang === langOptions.EN
                  ? props.info_09.text_EN
                  : props.info_09.text_ES}
              </TextRoboto>
              {context.lang === langOptions.EN &&
                props.info_09.points_EN.map((point: any) => (
                  <TextSabon
                    key={point}
                    style={{ width: "95%", paddingBottom: "0px" }}
                  >
                    {point}
                  </TextSabon>
                ))}
              {context.lang === langOptions.ES &&
                props.info_09.points_ES.map((point: any) => (
                  <TextSabon
                    key={point}
                    style={{ width: "95%", paddingBottom: "0px" }}
                  >
                    {point}
                  </TextSabon>
                ))}
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
            <Title sx={{ marginTop: "10px" }}>
              {context.lang === langOptions.EN
                ? props.title_04_EN
                : props.title_04_ES}
            </Title>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <TextSabon style={{ width: "100%", paddingTop: "0px" }}>
                {context.lang === langOptions.EN
                  ? props.info_10.text_EN
                  : props.info_10.text_ES}
              </TextSabon>

              {context.lang === langOptions.EN &&
                props.info_10.points_EN.map((point: any) => (
                  <TextSabon key={point} style={{ width: "100%" }}>
                    {point}
                  </TextSabon>
                ))}
              {context.lang === langOptions.ES &&
                props.info_10.points_ES.map((point: any) => (
                  <TextSabon key={point} style={{ width: "100%" }}>
                    {point}
                  </TextSabon>
                ))}
            </Box>

            <Footer />
          </ContainerStyle>
        </AmenitiesPageStyle>
      )}
    </>
  );
};

export default Amenities;

export async function getStaticProps() {
  const title_01_EN = amenitiesInfo.title_01_EN;
  const title_01_ES = amenitiesInfo.title_01_ES;
  const title_02_EN = amenitiesInfo.title_02_EN;
  const title_02_ES = amenitiesInfo.title_02_ES;
  const title_03_EN = amenitiesInfo.title_03_EN;
  const title_03_ES = amenitiesInfo.title_03_ES;
  const title_04_EN = amenitiesInfo.title_04_EN;
  const title_04_ES = amenitiesInfo.title_04_ES;

  const info_01_EN = amenitiesInfo.info_01_EN;
  const info_01_ES = amenitiesInfo.info_01_ES;
  const info_02_EN = amenitiesInfo.info_02_EN;
  const info_02_ES = amenitiesInfo.info_02_ES;

  const info_06_EN = amenitiesInfo.info_06_EN;
  const info_06_ES = amenitiesInfo.info_06_ES;

  const info_03 = info_03_obj;
  const info_04 = info_04_obj;
  const info_05 = info_05_obj;
  const info_07 = info_07_obj;
  const info_08 = info_08_obj;
  const info_09 = info_09_obj;
  const info_10 = info_10_obj;

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
      info_06_EN,
      info_06_ES,

      info_03,
      info_04,
      info_05,
      info_07,
      info_08,
      info_09,
      info_10,
    },
  };
}

const AmenitiesPageStyle = styled(Box)(({ theme }) => ({
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
    fontSize: "15px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "17px",
  },
}));
