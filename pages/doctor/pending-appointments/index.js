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

const PendingAppointments = () => {
    const { user } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

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
      label: "User Id",
      name: "userId",
    },
    {
      label: "Appointment For",
      name: "type",
    },
    {
      label: "Name",
      name: "name",
    },
    {
      label: "Date Of Birth",
      name: "dateOfBirth",
    },
    {
      label: "Date",
      name: "date",
    },
    {
      label: "Time",
      name: "time",
    },
    {
        label: "Action",
        name: "id",
        options: {
          customBodyRender: (value) => {
            return (
              <>
                <div className="d-flex">
                  <Typography
                    sx={{
                      border: "1px solid #00A300",
                      color: "#00A300",
                      borderRadius: "10px",
                      fontSize: "15px",
                      fontWeight: 500,
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 2,
                      width: "100px",
                      margin: "0 5px",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      changeUserAppointmentStatus("approved", value)
                    }}
                  >
                    Approve
                  </Typography>
                  <Typography
                    sx={{
                      border: "1px solid #FF0000",
                      color: "#FF0000",
                      borderRadius: "10px",
                      fontSize: "15px",
                      fontWeight: 500,
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 2,
                      width: "100px",
                      margin: "0 5px",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      changeUserAppointmentStatus("rejected", value)
                    }}
                  >
                    Reject
                  </Typography>
                </div>
              </>
            );
          },
        },
      },
  ];

  function convertToArray(obj) {
    if (!Array.isArray(obj)) {
      return [obj];
    }
    return obj;
  }


  const getAllPendingAppointments = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctor/get-all-appointments`,
        {
            doctorId: user?.user?.userId
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
        const dataInArray = convertToArray(res?.data?.data)
        toast.success("User Appointments Fetched", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const pendingAppointments = dataInArray.filter(
            (app) => app.status === "pending"
          );
          
        setData(pendingAppointments.reverse());
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

  const changeUserAppointmentStatus = async (status,id) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctor/update-status`,
        {
            appointmentsId: id,
            status: status
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
        toast.success(`Request has been ${status}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getAllPendingAppointments();
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
    getAllPendingAppointments();

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
            <Typography sx={styles.text}>New Appointments</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Table columns={columns} tableData={data} />
      </Box>
    </div>
  );
};

// export default PendingAppointments;
export default withAuth(PendingAppointments, ['doctor']);
