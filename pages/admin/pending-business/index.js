import { Box, Typography, Grid, IconButton, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table, Dialog } from "../../../genericComponents";
import { RemoveRedEye, Tune, Circle, Close } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { withAuth } from '../../../customHooks/withAuth';

const PendingBusiness = () => {
  const [data, setData] = useState([]);
const [toggleModal, setToggleModal] = useState(false);
const [dialogTitle, setDialogTitle] = useState("");
const [dialogDescription, setDialogDescription] = useState("");
const [dialogActions, setDialogActions] = useState([]);
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
      label: "Id",
      name: "id",
    },
    {
        label: "Company Name",
        name: "companyName",
      },
      {
        label: "Email",
        name: "email",
      },
      {
        label: "No Of Employees",
        name: "noOfEmployees",
      },
      {
          label: "Phone Number",
          name: "phoneNumber",
        },
      {
          label: "Requested At",
          name: "createdAt",
        },
        {
            label: "Action",
            name: "Action",
          },
    {
        label: "Payment Status",
        name: "paymentStatus",
        options: {
          customBodyRender: (value) => {
            return (
              <Typography
                sx={{
                  border:
                    value === true
                      ? `1px solid #00A300`
                      : "1px solid #FF0000",
                  color: value === true ? `#00A300` : "#FF0000",
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
                {value === true ? "Paid" : "Not Paid"}
              </Typography>
            );
          },
        },
      },
    {
      label: "Actions",
      name: "status",
      options: {
        filter: true,
        sort: true,
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
                  }}
                >
                  Approve
                </Typography>
              </div>
            </>
          );
        },
      },
    },
  ];


  const deactivateHandler = (data) => {
    setToggleModal((prev) => !prev)
    setDialogTitle("Warning");
    setDialogDescription("Are you sure to Approve this Busniess account?");
    setDialogActions([
      {
        title: "No",
        onClick: () => setToggleModal(false),
      },
      {
        title: "Yes",
        onClick: () => handleRowClick(data),
      }
    ]);
  };

  const getAllRequests = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/get-all-business-accounts`,
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
        toast.success("All Doctors Fetched", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // const pending = res.data.data.filter(
        //     (d) => [d.status === "pending", "View"]
        //   );
        const pendingAccounts = res.data.data.filter(
          (doc) => doc.status === "pending"
        );
        setData(pendingAccounts);
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


  const submitHandler = async (data) => {
    setToggleModal(false);
    console.log("imran ",data)
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/change-business-accounts-status`,
        {
            id: Number(data?.id),
            status: "approved",
            email: data?.email,
            companyName: data?.companyName,
            noOfEmployees: Number(data?.noOfEmployees)
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
        toast.success(`Request has been approved`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getAllRequests();
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

    getAllRequests();
  }, []);

  const handleRowClick = async (rowData) => {
    const rowDataObject = {};
    await columns.forEach((column, index) => {
      rowDataObject[column.name] = rowData[index];
    });
   await submitHandler(rowDataObject);
  };

  const options = {
    selectableRows: false, // Disable row selection
    print: false, // Hide the print button
    download: false, // Hide the download button
    viewColumns: false, // Hide the "View Columns" dropdown
    onRowClick: deactivateHandler,
  };

  return (
    <div>
      <Grid container justifyContent="center" style={{ marginBottom: "20px" }}>
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
            <Typography sx={styles.text}>Total Pending Requests</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Table columns={columns} tableData={data} options={options} />
      </Box>
      <Dialog
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          title={dialogTitle}
          description={dialogDescription}
          actions={dialogActions}
        />
    </div>
  );
};

//export default PendingBusiness;
export default withAuth(PendingBusiness, ['admin']);
