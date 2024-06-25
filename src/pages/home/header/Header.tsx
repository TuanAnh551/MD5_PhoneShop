import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

// SCSS styles
import "./header.scss";

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
  return (
    <AppBar position="static" className="header-bar">
      <Toolbar className="toolbar">
        <Typography variant="h6" noWrap component="div" className="logo">
          CellphoneS
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
          <Button color="inherit">Danh mục</Button>
          <Button color="inherit">Xem giá tại Hồ Chí Minh</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Bạn cần tìm gì?"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button color="inherit">Gọi mua hàng 1800.2087</Button>
          <Button color="inherit">Cửa hàng gần bạn</Button>
          <Button color="inherit">Tra cứu đơn hàng</Button>
          <Button color="inherit">Giỏ hàng</Button>
          <Button color="inherit">Đăng nhập</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
