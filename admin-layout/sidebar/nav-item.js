import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  ListItem,
  ListItemButton,
  Typography,
  ListItemIcon,
  List,
  Collapse,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { ExpandLess, ExpandMore, ChevronRight } from "@mui/icons-material";
import * as MUIIcons from "@mui/icons-material";

export const NavItem = ({ icon, url, title, onClose, subMenu, ...others }) => {
  const router = useRouter();
  const path = router?.asPath;
  const exactPath = "/" + path.split("/")[1] + "/" + path.split("/")[2];
  let active = `/${exactPath}` === url ? true : false;
  const [open, setOpen] = React.useState(false);

  console.log("active link", exactPath, url, active)

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  let Icon = MUIIcons[icon || "Home"];
  return (
    <ListItem
      disableGutters
      onClick={onClose}
      sx={{
        mb: 3,
        py: 0,
        borderRight: active && `3px solid #ccc`,
      }}
      {...others}
    >
      <Link href={subMenu.length > 0 ? "" : url} passHref>
        <ListItemButton
          component="a"
          disableRipple
          disableTouchRipple
          sx={{
            backgroundColor: active && "#eee",
            borderRadius: open ? "10px" : "27px",
            mx: 2,
            minHeight: "40px",
            textAlign: "center",
            width: "auto",
            display: "flex",
            flexDirection: "column",
            p: 0,
            "&:hover": {
              backgroundColor: !active
                ? "rgba(255,255,255, 0.05)"
                : "#eee",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignSelf: "flex-start",
              width: "100%",
              py: 1,
              px: 2,
              alignItems:'center'
            }}
            onClick={subMenu.length > 0 ? handleClick : undefined}
          >
            {active ? <Icon sx={{color:"#000"}}/> : <Icon sx={{color:"#333"}}  />}
            <Typography
              sx={{
                fontSize: "14px",
                ml: "15px",
                color: active ? "#0077B6" : "#333",
                textAlign: "left",
                whiteSpace: "nowrap"
              }}
              className="admin_link"
            >
              {title}
            </Typography>
            {subMenu.length > 0 ? (
              open ? (
                <ExpandLess
                  sx={{ ml: "auto", color: "#000" && "#000" }}
                />
              ) : (
                <ExpandMore
                  sx={{ ml: "auto", color: "#000" && "#000" }}
                />
              )
            ) : null}
          </Box>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subMenu?.map((item, index) => {
                let subActive = path.includes(item?.url);
                return (
                  <Link href={item.url} key={index} passHref>
                    <Box sx={{ width: "100%" }}>
                      <ListItemButton
                        disableRipple
                        sx={{
                          pl: 0,
                          ml: "-5px",
                          "&:hover": {
                            backgroundColor: "inherit",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ color: "#000", minWidth: "35px" }}>
                          <ChevronRight />
                        </ListItemIcon>
                        <ListItemText
                          primary={item.title}
                          sx={{ color: active ? "#0077B6" : "#333" }}
                        />
                      </ListItemButton>
                    </Box>
                  </Link>
                );
              })}
            </List>
          </Collapse>
        </ListItemButton>
      </Link>
    </ListItem>
  );
};
