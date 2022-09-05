import Image from "next/image";
import { NavLink } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {
  Box,
  BoxProps,
  Fade,
  Menu,
  MenuItem,
  Paper,
  Popper,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Context, langOptions } from "../../context";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);
  const desktop = useMediaQuery("(min-width:1000px)");
  const mobile = useMediaQuery("(max-width:550px)");
  const router = useRouter();

  const [onBtn, setOnBtn] = useState<boolean>(false);
  const [onPopper, setOnPopper] = useState<boolean>(false);

  const [anchorElSupport, setAnchorElSupport] =
    React.useState<null | HTMLElement>(null);
  const openSupport = Boolean(anchorElSupport);
  const handleClickSupport = (event: any) => {
    setAnchorElSupport(event.currentTarget!);
    setOnPopper(false);
    setOnBtn(true);
  };
  const handleCloseSupport = () => {
    setAnchorElSupport(null);
  };

  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(
    null
  );
  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event: any) => {
    setAnchorElMenu(event.currentTarget!);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false && (
        <NavStyle desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
          {desktop && (
            <NavContainerMD>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo.png"
                  width="235px"
                  height="65px"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <NavLinks>
                <Link href="/">
                  <LinkItem
                    active={router.pathname === "/" ? 1 : 0}
                    desktop={desktop ? 1 : 0}
                  >
                    {context.lang === langOptions.EN ? "HOME" : "INICIO"}
                  </LinkItem>
                </Link>
                <Link href="/location">
                  <LinkItem
                    active={router.pathname === "/location" ? 1 : 0}
                    desktop={desktop ? 1 : 0}
                  >
                    {context.lang === langOptions.EN ? "LOCATION" : "UBICACION"}
                  </LinkItem>
                </Link>
                <Link href="/residential">
                  <LinkItem
                    active={router.pathname === "/residential" ? 1 : 0}
                    desktop={desktop ? 1 : 0}
                  >
                    {context.lang === langOptions.EN
                      ? "RESIDENTIAL"
                      : "RESIDENCIAL"}
                  </LinkItem>
                </Link>
                <Link href="/houses">
                  <LinkItem
                    active={router.pathname === "/houses" ? 1 : 0}
                    desktop={desktop ? 1 : 0}
                  >
                    {context.lang === langOptions.EN ? "HOUSES" : "CASAS"}
                  </LinkItem>
                </Link>
                <Link href="/amenities">
                  <LinkItem
                    active={router.pathname === "/amenities" ? 1 : 0}
                    desktop={desktop ? 1 : 0}
                  >
                    {context.lang === langOptions.EN
                      ? "AMENITIES"
                      : "AMENIDADES"}
                  </LinkItem>
                </Link>
                <LinkItem
                  active={0}
                  desktop={desktop ? 1 : 0}
                  onClick={handleClickSupport}
                  onMouseEnter={handleClickSupport}
                  onMouseLeave={() => {
                    setOnBtn(false);
                  }}
                >
                  {context.lang === langOptions.EN ? "SUPPORT" : "SOPORTE"}
                </LinkItem>
                <Box
                  sx={{
                    cursor: "pointer",
                    marginLeft: "4px",
                  }}
                  onClick={() => {
                    context.toggleLang();
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className={
                        context.lang === langOptions.EN
                          ? "fi fi-gb"
                          : "fi fi-es"
                      }
                      style={{ width: "15px", marginRight: "5px" }}
                    ></span>
                    <Typography
                      fontSize="12px"
                      marginTop="1px"
                      fontWeight="400"
                      letterSpacing=".7px"
                    >
                      {context.lang === langOptions.EN ? "EN" : "ES"}
                    </Typography>
                  </Box>
                </Box>
              </NavLinks>
            </NavContainerMD>
          )}
          {!desktop && (
            <NavContainerSM>
              <MenuIcon
                fontSize={mobile ? "medium" : "large"}
                sx={{
                  color: "gray",
                  cursor: "pointer",
                }}
                onClick={handleClickMenu}
              />
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo.png"
                  width={mobile ? "128px" : "177px"}
                  height={mobile ? "36px" : "50px"}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </NavContainerSM>
          )}
        </NavStyle>
      )}

      <Popper
        open={openSupport && desktop && (onBtn || onPopper)}
        anchorEl={anchorElSupport}
        placement="bottom"
        transition
        onMouseEnter={() => {
          setOnPopper(true);
        }}
        onMouseLeave={() => {
          setOnPopper(false);
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box
              sx={{
                paddingTop: "4px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Link href="/contact">
                <LinkItem
                  active={router.pathname === "/contact" ? 1 : 0}
                  desktop={desktop ? 1 : 0}
                >
                  {context.lang === langOptions.EN ? "CONTACT" : "CONTACTO"}
                </LinkItem>
              </Link>
              <a
                href="https://park-street.us/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkItem active={0} desktop={desktop ? 1 : 0}>
                  {context.lang === langOptions.EN
                    ? "PARK STREET"
                    : "PARK STREET"}
                </LinkItem>
              </a>
            </Box>
          </Fade>
        )}
      </Popper>

      <Menu
        id="basic-menu"
        anchorEl={anchorElMenu}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          display: !desktop ? "block" : "none",
          ".MuiMenuItem-root": {
            minHeight: "30px",
          },
        }}
      >
        <Link href="/">
          <MenuItem
            onClick={handleCloseMenu}
            selected={router.pathname === "/"}
          >
            <LinkItem desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
              {context.lang === langOptions.EN ? "HOME" : "INICIO"}
            </LinkItem>
          </MenuItem>
        </Link>

        <Link href="/location">
          <MenuItem
            onClick={handleCloseMenu}
            selected={router.pathname === "/location"}
          >
            <LinkItem desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
              {context.lang === langOptions.EN ? "LOCATION" : "UBICACION"}
            </LinkItem>
          </MenuItem>
        </Link>
        <Link href="/residential">
          <MenuItem
            onClick={handleCloseMenu}
            selected={router.pathname === "/residential"}
          >
            <LinkItem desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
              {context.lang === langOptions.EN ? "RESIDENTIAL" : "RESIDENCIAL"}
            </LinkItem>
          </MenuItem>
        </Link>

        <Link href="/houses">
          <MenuItem
            onClick={handleCloseMenu}
            selected={router.pathname === "/houses"}
          >
            <LinkItem desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
              {context.lang === langOptions.EN ? "HOUSES" : "CASAS"}
            </LinkItem>
          </MenuItem>
        </Link>

        <Link href="/amenities">
          <MenuItem
            onClick={handleCloseMenu}
            selected={router.pathname === "/amenities"}
          >
            <LinkItem desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
              {context.lang === langOptions.EN ? "AMENITIES" : "AMENIDADES"}
            </LinkItem>
          </MenuItem>
        </Link>

        <Link href="/contact">
          <MenuItem
            onClick={handleCloseMenu}
            selected={router.pathname === "/contact"}
          >
            <LinkItem desktop={desktop ? 1 : 0} mobile={mobile ? 1 : 0}>
              {context.lang === langOptions.EN ? "CONTACT" : "CONTACTO"}
            </LinkItem>
          </MenuItem>
        </Link>

        <MenuItem onClick={handleCloseMenu}>
          <a href="https://park-street.us/" target="_blank" rel="noreferrer">
            <LinkItem active={0} desktop={desktop ? 1 : 0}>
              {context.lang === langOptions.EN ? "PARK STREET" : "PARK STREET"}
            </LinkItem>
          </a>
        </MenuItem>
        <MenuItem
          onClick={() => {
            context.toggleLang();
          }}
        >
          <Box
            sx={{
              marginLeft: "8px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              className={
                context.lang === langOptions.EN ? "fi fi-gb" : "fi fi-es"
              }
              style={{ width: "15px", marginRight: "5px" }}
            ></span>
            <Typography
              fontSize="12px"
              marginTop="1px"
              fontWeight="400"
              letterSpacing=".7px"
            >
              {context.lang === langOptions.EN ? "EN" : "ES"}
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;

interface NavProps extends BoxProps {
  desktop: Number;
  mobile: Number;
}
const NavStyle = styled(Box)<NavProps>(({ desktop, mobile }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: `${desktop ? "70px" : mobile ? "50px" : "60px"}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
}));

const NavContainerMD = styled(Box)({
  width: "1000px",
  height: "100%",
  margin: "0px 20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavContainerSM = styled(Box)({
  width: "90%",
  height: "100%",
  margin: "0px 20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "40px",
});

const NavLinks = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

interface CustomBoxprops extends BoxProps {
  active?: Number;
  mobile?: Number;
  desktop: Number;
}
const LinkItem = styled(Box)<CustomBoxprops>(({ active, mobile, desktop }) => ({
  padding: `${mobile ? "4px 7px" : desktop ? "8px 10px" : "4px 7px"}`,
  backgroundColor: `${desktop ? (active ? "#98876e" : "#bcb5aa") : "none"}`,
  color: `${desktop ? "white" : "#4A4A4A"}`,
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: `${mobile ? "12px" : desktop ? "14px" : "13px"}`,
  fontWeight: "500",
  ":hover": {
    backgroundColor: `${desktop ? "#98876e" : "none"}`,
  },
}));
