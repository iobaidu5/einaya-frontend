import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import { withAuth } from '../../../customHooks/withAuth';


const AdminHome = () => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  console.log("admin user role ", user?.role)

//   useEffect(() => {
//  if(user?.role !== "admin"){
//   winsdow.location.href = "/";
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
//   }, [user?.role])

  return (
    <h1>Einaya Admin Home</h1>
  )
}

//export default AdminHome

export default withAuth(AdminHome, ['admin']);