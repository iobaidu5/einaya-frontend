import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AdminNavbar } from "./navbar";
import { AdminSidebar } from "./sidebar";
import { AdminFooter } from "./footer";

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
    paddingLeft: "350px",
    paddingRight: "20px",
  },
}));
export const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ position: "relative", overflowX: "hidden" }} id="expiryDialog">
      <AdminNavbar onSidebarOpen={() => setSidebarOpen(!isSidebarOpen)} />
      <AdminSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
      <LayoutRoot>
        <Box
          sx={{
            px: { xs: 0, sm: "10px", md: "20px", lg: "30px" },
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
            paddingLeft: "400px",
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
      <AdminFooter />
      <button
        id="setOpenTrue"
        style={{ display: "none" }}
        onClick={() => {
          setOpen(true);
        }}
      />
    </Box>
  );
};
