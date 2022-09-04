import { Box, styled } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <HomePageStyle>
      <Image
        src="/homePageIcon1.png"
        alt="homapage icon1.png"
        width="1000px"
        height="325px"
        layout="intrinsic"
      />
    </HomePageStyle>
  );
};

export default Home;

const HomePageStyle = styled(Box)({
  position: "absolute",
  top: "70px",
  left: "0px",
  width: "calc(100vw - 40px)",
  height: "calc(100vh - 70px)",
  margin: "0px 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
});
