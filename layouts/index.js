import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../admin-layout";
import { AdminNavbar } from "../admin-layout/navbar";
import { AdminSidebar } from "../admin-layout/sidebar";
import { AdminFooter } from "../admin-layout/footer";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 124,
  minHeight: "calc(100vh - 0px)",
  [theme.breakpoints.up("xs")]: {
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingBottom: "150px",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: 320,
    paddingRight: "20px",
  },
}));

export const Layout = ({ children }) => {
  const user = useSelector((state) => state.user);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      {user?.user?.role === "admin" || user?.user?.role === "doctor" ? (
        <div className="content">
          <AdminNavbar onSidebarOpen={() => setSidebarOpen(!isSidebarOpen)} />
          <AdminSidebar
            onClose={() => setSidebarOpen(false)}
            open={isSidebarOpen}
          />
                <LayoutRoot>
        <Box
          sx={{
            px: { xs: 0, sm: "10px", md: "20px", lg: "30px" },
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
         
        </div>
      ) : (
        <div className="content">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};
