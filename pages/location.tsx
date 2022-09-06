import { Box, Divider, styled, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import AddressCard from "../components/nav/addressCard";
import Footer from "../components/nav/footer";
import { Context, langOptions } from "../context";
import {
  locationInfo,
  locationInfo_addresses,
} from "../staticInfo/locationInfo";

const Location = (props: any): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);
  const mobile = useMediaQuery("(max-width:550px)");

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false && (
        <LocationPageStyle>
          <ContainerStyle>
            <Image
              src={locationInfo.imageSrc_01}
              alt={locationInfo.imageSrc_01}
              width="979px"
              height="319px"
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
                  color: "white",
                  paddingLeft: { xs: "10px", sm: "20px" },
                  borderLeft: "2px solid #616e89",
                }}
              >
                {context.lang === langOptions.EN
                  ? locationInfo.image_01_Text_EN
                  : locationInfo.image_01_Text_ES}
              </Typography>
            </Box>
            <Title sx={{ marginTop: "15px" }}>
              {context.lang === langOptions.EN
                ? locationInfo.title_01_EN
                : locationInfo.title_01_ES}
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
                  ? locationInfo.info_01_EN
                  : locationInfo.info_01_ES}
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
                  ? locationInfo.info_02_EN
                  : locationInfo.info_02_ES}
              </TextSabon>
            </Box>
            <Image
              style={{
                marginTop: mobile ? "20px" : "40px",
              }}
              src={locationInfo.imageSrc_02}
              alt={locationInfo.imageSrc_02}
              width="979px"
              height="970px"
            />

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
                justifyContent: { xs: "space-around", md: "space-around" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "95%", sm: "40%", md: "50%" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={locationInfo.imageSrc_03}
                  alt={locationInfo.imageSrc_03}
                  width="600px"
                  height="312px"
                />
                <Divider
                  orientation="horizontal"
                  sx={{
                    display: { xs: "block", sm: "none" },
                    width: "90%",
                    height: "1px",
                    backgroundColor: "#d8b47d",
                    margin: "20px 0px",
                    border: "none",
                  }}
                />
              </Box>

              <Box
                sx={{
                  alignSelf: { xs: "flex-start", sm: "flex-start" },
                }}
              >
                <TextRoboto
                  sx={{
                    fontSize: { xs: "17px", sm: "16px", md: "21px" },
                    color: "#b18441",
                    fontWeight: "500",
                  }}
                >
                  {context.lang === langOptions.EN
                    ? locationInfo.info_03_title_EN
                    : locationInfo.info_03_title_ES}
                </TextRoboto>
                <TextRoboto
                  sx={{ fontSize: { xs: "14px", sm: "15px", md: "17px" } }}
                >
                  {context.lang === langOptions.EN
                    ? locationInfo.info_03_point_01_EN
                    : locationInfo.info_03_point_01_ES}
                </TextRoboto>

                <TextRoboto
                  sx={{ fontSize: { xs: "14px", sm: "14.5px", md: "17px" } }}
                >
                  {context.lang === langOptions.EN
                    ? locationInfo.info_03_point_02_EN
                    : locationInfo.info_03_point_02_ES}
                </TextRoboto>
                <TextRoboto
                  sx={{ fontSize: { xs: "14px", sm: "15px", md: "17px" } }}
                >
                  {context.lang === langOptions.EN
                    ? locationInfo.info_03_point_03_EN
                    : locationInfo.info_03_point_03_ES}
                </TextRoboto>
                <TextRoboto
                  sx={{ fontSize: { xs: "14px", sm: "15px", md: "17px" } }}
                >
                  {context.lang === langOptions.EN
                    ? locationInfo.info_03_point_04_EN
                    : locationInfo.info_03_point_04_ES}
                </TextRoboto>
              </Box>
            </Box>

            <Divider
              orientation="horizontal"
              sx={{
                width: "90%",
                height: "2px",
                backgroundColor: "#f7f4ef",
                margin: { xs: "15px 0px", sm: "20px 0px" },
                border: "none",
              }}
            />

            <Title>
              {context.lang === langOptions.EN
                ? locationInfo.title_02_EN
                : locationInfo.title_02_ES}
            </Title>

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
                  width: { xs: "100%", sm: "50%" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextSabon style={{ width: "100%" }}>
                  {context.lang === langOptions.EN
                    ? locationInfo.info_04_EN
                    : locationInfo.info_04_ES}
                </TextSabon>
                <Image
                  src={locationInfo.imageSrc_04}
                  alt={locationInfo.imageSrc_04}
                  width="426px"
                  height="74px"
                />
                <Divider
                  orientation="horizontal"
                  sx={{
                    display: { xs: "block", sm: "none" },
                    width: "90%",
                    height: "1px",
                    backgroundColor: "#d8b47d",
                    margin: "20px 0px",
                    border: "none",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: { xs: "75%", sm: "40%" },
                  alignSelf: { xs: "center", sm: "flex-start" },
                }}
              >
                <TextSabon
                  style={{
                    backgroundColor: "#f7f4ef",
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  {context.lang === langOptions.EN
                    ? locationInfo.info_05_EN
                    : locationInfo.info_05_ES}
                </TextSabon>
              </Box>
            </Box>

            <Divider
              orientation="horizontal"
              sx={{
                width: "90%",
                height: "2px",
                backgroundColor: "#f7f4ef",
                margin: { xs: "15px 0px", sm: "20px 0px" },
                border: "none",
              }}
            />

            <Box
              sx={{
                width: {
                  xs: "calc(100% - 10px)",
                  sm: "calc(100% - 40px)",
                  md: "calc(100% - 20px)",
                },
                margin: {
                  xs: "0px 10px 20px 10px",
                  sm: "0px 40px 30px 40px",
                  md: "0px 20px 30px 20px",
                },
                display: "flex",
                flexDirection: "row",
                flexFlow: "wrap",
                justifyContent: "space-around",
                alignItems: "flex-start",
                gap: "20px",
                boxSizing: "border-box",
              }}
            >
              {locationInfo_addresses.map((address) => (
                <AddressCard
                  key={address.title}
                  name={address.title}
                  descrip={
                    context.lang === langOptions.EN
                      ? address.description_EN
                      : address.description_ES
                  }
                  month={
                    context.lang === langOptions.EN
                      ? address.month_EN
                      : address.month_ES
                  }
                  addr={
                    context.lang === langOptions.EN
                      ? address.address_EN
                      : address.address_ES
                  }
                  phone={address.phone}
                  link={address.link}
                />
              ))}
            </Box>

            <Footer />
          </ContainerStyle>
        </LocationPageStyle>
      )}
    </>
  );
};

export default Location;

export async function getStaticProps() {
  const title_01_EN = locationInfo.title_01_EN;
  const title_01_ES = locationInfo.title_01_ES;
  const title_02_EN = locationInfo.title_02_EN;
  const title_02_ES = locationInfo.title_02_ES;

  const info_01_EN = locationInfo.info_01_EN;
  const info_01_ES = locationInfo.info_01_ES;
  const info_02_EN = locationInfo.info_02_EN;
  const info_02_ES = locationInfo.info_02_ES;
  const info_03_title_EN = locationInfo.info_03_title_EN;
  const info_03_title_ES = locationInfo.info_03_title_ES;
  const info_03_point_01_EN = locationInfo.info_03_point_01_EN;
  const info_03_point_01_ES = locationInfo.info_03_point_01_ES;
  const info_03_point_02_EN = locationInfo.info_03_point_02_EN;
  const info_03_point_02_ES = locationInfo.info_03_point_02_ES;
  const info_03_point_03_EN = locationInfo.info_03_point_03_EN;
  const info_03_point_03_ES = locationInfo.info_03_point_03_ES;
  const info_03_point_04_EN = locationInfo.info_03_point_04_EN;
  const info_03_point_04_ES = locationInfo.info_03_point_04_ES;
  const info_04_EN = locationInfo.info_04_EN;
  const info_04_ES = locationInfo.info_04_ES;
  const info_05_EN = locationInfo.info_05_EN;
  const info_05_ES = locationInfo.info_05_ES;

  const addresses = locationInfo_addresses;

  return {
    props: {
      title_01_EN,
      title_01_ES,
      title_02_EN,
      title_02_ES,
      info_01_EN,
      info_01_ES,
      info_02_EN,
      info_02_ES,
      info_03_title_EN,
      info_03_title_ES,
      info_03_point_01_EN,
      info_03_point_01_ES,
      info_03_point_02_EN,
      info_03_point_02_ES,
      info_03_point_03_EN,
      info_03_point_03_ES,
      info_03_point_04_EN,
      info_03_point_04_ES,
      info_04_EN,
      info_04_ES,
      info_05_EN,
      info_05_ES,
      addresses,
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
  width: "100%",
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
