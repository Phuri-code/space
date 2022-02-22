import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MENUS, MENUS2 } from "./utils";
import Header from "./Header";
import { useRouter } from "next/router";
import { checkCurrentPage } from "./utils";
import { Typography } from "@mui/material";
import styled from "styled-components";

const SideBar = React.memo(() => {
  const router = useRouter();
  const handleClick = (item: any) => {
    console.log(item);

    router?.push(item);
  };
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: 308.5,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 300,
          boxSizing: "border-box",
        },
      }}
    >
      <div>
        <Header />
        <List>
          <StyledTypogaphy>
            {MENUS.map((menu: any, index: number) => {
              const isSeleted = checkCurrentPage(menu.url, router?.pathname);
              return (
                <ListItem
                  onClick={() => handleClick(menu.value)}
                  selected={isSeleted}
                  key={index}
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.label} />
                </ListItem>
              );
            })}
          </StyledTypogaphy>
        </List>
        <StyledTypogaphy>
          <StyledTypogaphy variant="h5" padding={2}>
            Your Library
          </StyledTypogaphy>
          <List>
            {MENUS2.map((menu: any, index: number) => {
              const isSeleted = checkCurrentPage(menu.url, router?.pathname);
              return (
                <ListItem
                  onClick={() => handleClick(menu.value)}
                  selected={isSeleted}
                  key={index}
                >
                  <ListItemIcon>
                    {menu.icon}
                    {menu.img}
                  </ListItemIcon>
                  <ListItemText primary={menu.label} />
                </ListItem>
              );
            })}
          </List>
        </StyledTypogaphy>
      </div>
    </Drawer>
  );
});

const StyledTypogaphy = styled(Typography)`
  opacity: 0.6;
  font-weight: bold;
  cursor: pointer;
  .Mui-selected {
    opacity: 1;
    background-color: transparent;
  }
`;

export default SideBar;
