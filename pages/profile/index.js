import React, { useEffect } from "react";
import VerticalTab from "../../components/Tabs/VerticalTab";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import tabData from "../../utils/data";
import { withAuth } from '../../customHooks/withAuth';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

 
  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="single-page-banner-content">
            <h1>My Profile</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tabs">
          <div className="tabs_content">
            <VerticalTab  data={tabData.jobs} tabs={tabData.tabs} />
          </div>
        </div>
      </div>
    </>
  );
};

// export default Profile;
export default withAuth(Profile, ['user']);
