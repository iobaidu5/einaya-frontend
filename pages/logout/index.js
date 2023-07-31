import React from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const router = useRouter()
    React.useEffect(() => {
        localStorage.removeItem("token");
        toast.success("Logged Out", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.location.href = "/";
    }, [])
  return (
    <><ToastContainer /></>
  )
}

export default Logout