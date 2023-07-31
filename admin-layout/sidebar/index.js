import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery, Grid, Typography } from "@mui/material";
import { menuList, doctorMenuList } from "./sidebar-menulist";
import { NavItem } from "./nav-item";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export const AdminSidebar = (props) => {
  const { user } = useSelector((state) => state.user);
  const theme = useTheme();
  const { open, onClose } = props;
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const content = (
    <Box sx={{ pt: "18px", pb: 10 }} className="admin">
      <Box
        sx={{
          width: "fit-content",
          mx: "auto",
          mb: "45px",
          cursor: "pointer",
        }}
      >
        <Link href="admin/home" passHref>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            gap="10px"
          >
            <Grid item>
              {/* <img
                src={`${getSession("company")?.logo}`}
                alt="logo"
                width="40px"
                height="40px"
              /> */}
            </Grid>
            <Grid item>
              <Typography
                // sx={{
                //   mt: "10px",
                //   mb: "20px",
                //   fontWeight: 600,
                //   fontSize: { xs: "24px", sm: "28px" },
                //   textAlign: "center",
                // }}
                className="admin_title"
              >
                {user?.role === "admin"
                  ? "Einaya Admin"
                  : `Dr. ${user?.user?.firstName}`}
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </Box>
      {/* <List> */}
      {user?.role === "admin"
        ? menuList?.map((item, index) => {
            return (
              <NavItem
                key={item.title}
                icon={item.icon}
                url={item.url}
                title={item.title}
                onClose={onClose}
                subMenu={item.subMenu || []}
              />
            );
          })
        : doctorMenuList?.map((item, index) => {
            return (
              <NavItem
                key={item.title}
                icon={item.icon}
                url={item.url}
                title={item.title}
                onClose={onClose}
                subMenu={item.subMenu || []}
              />
            );
          })}
      {/* </List> */}
    </Box>
  );

  if (mdUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            // background: "linear-gradient(265.63deg, #0077B6 -16.55%, #51CB20 114.1%)",
            color: "#fff",
            width: 300,
            zIndex: 1,
            borderRight: "none",
          },
        }}
        className="admin_sidebar"
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          // background: "linear-gradient(265.63deg, #0077B6 -16.55%, #51CB20 114.1%)",
          color: "#fff",
          width: 300,
          // borderRight:`10px solid ${GREY_COLOR.BACKGROUND_COLOR}`
        },
      }}
      sx={{ zIndex: (theme) => 10 + 100 }}
      className="admin_sidebar"
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
