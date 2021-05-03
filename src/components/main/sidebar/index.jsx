import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CreateIcon from "@material-ui/icons/Create";
import InputIcon from "@material-ui/icons/Input";
import PersonIcon from "@material-ui/icons/Person";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./style.scss";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const topBarBeforLogin = [
  {
    text: "Đăng kí",
    icon: <CreateIcon />,
    to: "/signup",
  },
  {
    text: "Đăng nhập",
    icon: <InputIcon />,
    to: "/signin",
  },
  {
    text: "Tìm khóa học",
    icon: <SearchIcon />,
    to: "/search-course",
  },
  {
    text: "Giỏ hàng",
    icon: <AddShoppingCartIcon />,
    to: "/carts",
  },
];
const topBarAfterLogin = [
  {
    text: "Profile",
    icon: <PersonIcon />,
    to: "/user",
  },
  {
    text: "Tìm khóa học",
    icon: <SearchIcon />,
    to: "/search-course",
  },
  {
    text: "Giỏ hàng",
    icon: <AddShoppingCartIcon />,
    to: "/carts",
  },
];

export default function Sidebar({ loginSwitch }) {
  const { categories } = useSelector((state) => state.courses);

  const renderLoginSwitch = () => {
    if (loginSwitch) {
      return topBarBeforLogin.map((item, index) => (
        <NavLink to={item.to} exact={true} className="linkItem">
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </NavLink>
      ));
    } else {
      return topBarAfterLogin.map((item, index) => (
        <NavLink to={item.to} exact={true} className="linkItem">
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </NavLink>
      ));
    }
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.root}>
        {["Chào mừng đến với Elearning"].map((text, index) => (
          <ListItem button key={text} className="Title">
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>{renderLoginSwitch()}</List>
      <Divider />
      <List>
        {["Danh mục khóa học"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {categories?.map((item, index) => (
          <ListItem button key={index}>
            <NavLink
              exact={true}
              to={`/category/${item.maDanhMuc}`}
              className="text-dark text-decoration-none"
            >
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <span className="category-tex ">{item.tenDanhMuc}</span>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            // variant="contained"
            color="secondary"
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
