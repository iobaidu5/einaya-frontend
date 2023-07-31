import { Box, Typography, Grid, IconButton, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "../../../genericComponents";
import { RemoveRedEye, Tune, Circle, Close } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { withAuth } from '../../../customHooks/withAuth';

const ShowAllDoctors = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  const styles = {
    status: {
      boxShadow: "0px 0px 20px rgba(00,00,00,0.12)",
      borderRadius: "15px",
      height: "100%",
      textAlign: "left",
      display: "flex",
      fontWeight: "500",
      justifyContent: "center",
      padding: "20px 40px",
    },
    statusBox: {
      boxShadow: "0px 0px 20px rgba(00,00,00,0.12)",
      borderRadius: "15px",
      height: "100%",
      textAlign: "left",
      display: "flex",
      fontWeight: "500",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 40px",
      width: { xs: "100%", md: "560px" },
      height: "100%",
    },
    heading: {
      fontSize: { xs: "30px", sm: "40px" },
      fontWeight: "500",
      color: "#0077B6",
      textAlign: "left",
      padding: "4px 0",
    },
    headingBlack: {
      fontSize: { xs: "30px", sm: "40px" },
      fontWeight: "500",
      textAlign: "left",
      color: "#333",
    },
    text: {
      display: "flex",
      alignItems: "center",
      fontSize: { xs: "16px", sm: "16px" },
      fontWeight: "medium",
      color: "#333",
    },
    rightBorder: {
      borderColor: "#000",
      borderRightWidth: "2px",
      marginTop: "80px",
      marginBottom: "80px",
    },
    chart: {
      width: "170px",
      height: "170px",
      maxWidth: "100%",
    },
    bar: {
      color: "#eee",
      fontSize: "20px",
    },
  };

  let columns = [
    {
      label: "Name",
      name: "firstName",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Phone Number",
      name: "phone",
    },
    {
      label: "Address",
      name: "address",
    },
    {
      label: "Specialization",
      name: "specialization",
    },
    {
      label: "Experience",
      name: "experience",
    },
    {
        label: "Fees",
        name: "fees",
      },
    {
      label: "Status",
      name: "status",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return (
            <Typography
              sx={{
                border:
                  value === "pending" ? `1px solid #FFA500` : "1px solid #00A300",
                color:  value === "pending" ? `#FFA500` : "#00A300",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 500,
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
                maxWidth: "160px",
              }}
            >
              {value === "approved" ? "Approved" : "Pending"}
            </Typography>
          );
        },
      },
    },
  ];

  const getAllDoctors = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/get-all-doctors`,
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
        toast.success("All Users Fetched", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setData(res.data.data);
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
//  if(user?.role !== "admin"){
//   window.location.href = "/";
//       toast.error("Un-Authorized Access", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }

    getAllDoctors();
  }, []);

  return (
    <div>
      <Grid container justifyContent="center" style={{marginBottom: "20px"}}>
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap={3}
          sx={{
            width: { md: "auto", xs: "100%" },
          }}
        >
          <Box
            justifyContent="space-between"
            flexDirection="column"
            sx={styles.status}
          >
            <Typography variant="h3" sx={styles.heading}>
              {data?.length || 0}
            </Typography>
            <Typography sx={styles.text}>Total Doctors</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Table columns={columns} tableData={data} />
      </Box>
    </div>
  );
};

//export default ShowAllDoctors;

export default withAuth(ShowAllDoctors, ['admin']);
