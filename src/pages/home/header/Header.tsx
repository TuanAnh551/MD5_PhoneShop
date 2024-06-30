import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { styled, alpha } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
// SCSS styles
import "./header.scss";
import { Link } from "react-router-dom";
import { Button, Modal, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();
  return (
    <AppBar position="static" className="header-bar">
      <Toolbar className="toolbar">
        <Typography variant="h6" noWrap component="div" className="logo">
          <Link to="/"> CellphoneS</Link>
        </Typography>
        <div className="toolbar-icons">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">{t("Danhmuc")}</Button>
          <Button color="inherit">{t("xemgia")}</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("search")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button color="inherit">{t("call")}</Button>
          <Button color="inherit">{t("shop")}</Button>
          <Button color="inherit">{t("order")}</Button>
          <Button className="button" color="inherit">
            <Link to="/cart">{t("cart")}</Link>
          </Button>

          <Button color="inherit" onClick={handleOpen} className="button">
            {t("login")}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="smember-modal">
              <button
                className="smember-modal__close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
              <h2 className="smember-modal__title">Smember</h2>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                alt="Smember"
                className="smember-modal__logo"
              />

              <p className="smember-modal__message">{t("model")}</p>
              <div className="smember-modal__buttons">
                <a
                  href="/register"
                  className="smember-modal__button smember-modal__button--register"
                >
                  {t("Register")}
                </a>
                <a
                  href="/login"
                  className="smember-modal__button smember-modal__button--login"
                >
                  {t("Login")}
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
