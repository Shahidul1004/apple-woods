import { Box, styled, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/nav/footer";
import HouseCard from "../components/nav/houseCard";
import { Context, langOptions } from "../context";
import { housesCardInfo, housesInfo } from "../staticInfo/housesInfo";

const Houses = (props: any): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false && (
        <HousesPageStyle>
          <ContainerStyle>
            <Title sx={{ marginTop: { xs: "15px", sm: "30px" } }}>
              {context.lang === langOptions.EN
                ? props.title_EN
                : props.title_ES}
            </Title>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexFlow: "wrap",
                justifyContent: "space-around",
                alignItems: "flex-start",
                gap: "20px",
                boxSizing: "border-box",
              }}
            >
              {props.houseCardInfo.map((house: any) => (
                <HouseCard
                  key={house.title_EN}
                  imgSrc={house.imgSrc}
                  buttonTxt={
                    context.lang === langOptions.EN ? "SET UP" : "CONFIGURAR"
                  }
                  name={
                    context.lang === langOptions.EN
                      ? house.title_EN
                      : house.title_ES
                  }
                  descrip={
                    context.lang === langOptions.EN
                      ? house.descrip_EN
                      : house.descrip_ES
                  }
                />
              ))}
            </Box>

            <Box sx={{ marginTop: "20px" }}>
              <Footer />
            </Box>
          </ContainerStyle>
        </HousesPageStyle>
      )}
    </>
  );
};

export default Houses;

export async function getStaticProps() {
  const title_EN = housesInfo.title_EN;
  const title_ES = housesInfo.title_ES;

  const houseCardInfo = housesCardInfo;

  return {
    props: {
      title_EN,
      title_ES,
      houseCardInfo,
    },
  };
}

const HousesPageStyle = styled(Box)(({ theme }) => ({
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
  maxWidth: "1100px",
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
