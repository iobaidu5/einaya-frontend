import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Paper,
  InputBase,
  useMediaQuery,
  Badge,
  Divider,
  ListItemIcon,
  Stack,
  Skeleton,
} from "@mui/material";
import { Search, MenuRounded, Circle, Forward } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../genericComponents/Spinner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";


const settings = ["Profile", "Logout"];

export const AdminNavbar = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const [notifications, setNotifications] = useState([]);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  // const getNotifications = () => {
  //   retrieveAPI({
  //     endPoint: `notification`,
  //     params: {
  //       companyId: getSession("company")?.id,
  //     },
  //   }).then(({ responseCode, data }) => {
  //     if (responseCode === 200) {
  //       setNotifications(data);
  //       return data;
  //     } else {
  //       setNotifications([]);
  //     }
  //   });
  // };

  const handleClick = (event) => {
    // getNotifications();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    if (e === "Logout") {
      localStorage.clear();
      //router.push("/logout");
      window.location.href = "/";
    }

    if (e === "Profile") {
      if(user?.role === "doctor"){
        window.location.href = "doctor/profile";
       // router.push("doctor/profile");
      //   router.push({
      //     pathname: '/doctor/profile',
      // }, '/doctor/profile');
      }
    }

    if (e === "Change Password") {
      router.push("/change-password");
    }
    setAnchorElUser(null);
  };

  const markAllNotificationsHandler = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-notifications`,
        {
          userId: user?.user?.userId,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success("All Notifications marked as read", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setNotifications(user?.user?.notification);
      } else {
        dispatch(hideLoading());
        toast.error(res?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (e) {
      dispatch(hideLoading());
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    // getNotifications();
    setNotifications(user?.user?.notification);
  }, []);

  console.log("notificationsss ", notifications);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        color: "#000",
        background: "#0077B6",
        height: "80px",
        position: "fixed",
        top: 0,
        zIndex: 130,
        width: { xs: "100%", md: "calc(100vw - 300px)" },
        left: { xs: 0, md: "300px" },
      }}
      className="admin_navbar"
    >
      <Container sx={{ height: "inherit" }} maxWidth={false}>
        <Toolbar disableGutters sx={{ height: "inherit" }}>
          {!mdUp && (
            <Box onClick={onSidebarOpen} sx={{ mr: "10px" }}>
              <MenuRounded sx={{ color: "#fff" }} />
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // flexBasis: "33.3%",
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: { xs: "nowrap", md: "nowrap" },
              }}
            >
              {/* <Paper
                elevation={0}
                component="form"
                sx={{
                  p: "2px 20px",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "auto", sm: 260, md: 300, lg: 340 },
                  maxWidth: { xs: "220px", sm: "100%" },
                  height: 40,
                  background: "transparent",
                  border: "1px solid #fff",
                  borderRadius: "42px",
                  mr: { md: "5px" },
                }}
              >
                <InputBase
                  sx={{ flex: 1, color: "#fff", opacity: 1 }}
                  placeholder="Search Here..."
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px", pr: "5px" }}
                  aria-label="search"
                >
                  <Search sx={{ color: "#fff" }} />
                </IconButton>
              </Paper> */}

              <Box
                sx={{
                  display: "flex",
                  width: { xs: 125, sm: 135, md: 145 },
                  justifyContent: "space-evenly",
                  mb: { xs: 0, md: 0 },
                }}
              >
                <Tooltip title="Notifications">
                  <IconButton
                    aria-label="notification"
                    onClick={handleClick}
                    sx={{ mr: { xs: 1, sm: 0 } }}
                  >
                    <Badge
                      // badgeContent={notifications.length || 0}
                      badgeContent=" "
                      overlap="circular"
                      variant="dot"
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#0077B6",
                        },
                      }}
                    >
                      <i className="bx bx-bell" style={{ color: "#fff" }}>
                        <span className="notification-length">
                          {notifications?.length}
                        </span>
                      </i>
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src=""
                        sx={{
                          width: "40px",
                          height: "40px",
                          background: "#0077B6",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((key) => (
                      <MenuItem
                        key={key}
                        onClick={() => {
                          handleCloseUserMenu(key);
                          
                          router.push("/logout");
                        }}
                      >
                        <Typography textAlign="center">{key}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>

                  {/* NOTIFICATION MENU STARTED */}
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
{    notifications.length > 0 &&                <p
                      onClick={markAllNotificationsHandler}
                      className="notification-read"
                    >
                      Mark All As Read
                    </p>}
                    {notifications && notifications.length > 0 ? (
                      notifications.map((item, i) => {
                        let totalNotifications = notifications.length;
                        return (
                          <Box key={i}>
                            <Link href={`${item?.data?.onClickPath}`}>
                              <MenuItem sx={{ minHeight: "48px !important" }}>
                                <Circle
                                  fontSize="small"
                                  sx={{
                                    color: "#0077B6",
                                    mr: 1.5,
                                    fontSize: "10px",
                                  }}
                                />
                                <Typography mr={7}>{item?.message}</Typography>
                              </MenuItem>
                            </Link>

                            {i < totalNotifications - 1 && <Divider />}
                          </Box>
                        );
                      })
                    ) : (
                      <Stack spacing={2} p={1}>
                        <Skeleton variant="rounded" width={250} height={50} />
                        <Divider />
                        <Skeleton variant="rounded" width={250} height={50} />
                        <Divider />
                        <Skeleton variant="rounded" width={250} height={50} />
                      </Stack>
                    )}
                  </Menu>
                  {/* NOTIFICATION MENU ENDED */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <ToastContainer />
      <Spinner />
    </AppBar>
  );
};
