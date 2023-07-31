import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import { withAuth } from '../../../customHooks/withAuth';


const DoctorHome = () => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <h1>Einaya Doctor Panel</h1>
  )
}

//export default DoctorHome

export default withAuth(DoctorHome, ['doctor']);