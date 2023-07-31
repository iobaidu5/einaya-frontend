import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabId } from "../../redux/features/tabSlice";

import VTlist from "./VTlist";
import VTcontent from "./VTcontent";
import ProfileTab from "./ProfileTab";
import PersonalInformation from "./PersonalInformation";
import AccountManagement from "./AccountManagement";
import MyCards from "./MyCards";
import MyRequests from "./MyRequests";
import Notifications from "./Notifications";
import { useRouter } from 'next/router'

function VerticalTab(props) {
  const { activeTabId } = useSelector((state) => state.tab);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("active tab id", activeTabId);
  const router = useRouter();
  // const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    dispatch(setActiveTabId(id));
  }

  const handleLogout = () => {
    localStorage.clear();
    //router.push("/logout");
    window.location.href = "/";
  }

  return (
    <div className="section__Jobs-container">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3">
            <div className="section__Jobs-styledTab">
              <ul className="section__Jobs-styledTabList">
                {props.tabs.map((tab, index) => (
                  tab.title !== "Logout" ? 
                  <VTlist
                    key={tab?.index}
                    onClick={btnClick}
                    tabName={tab?.title}
                    leading={tab?.title === "Notifications" && user?.user?.notification?.length}
                    index={index}
                    activeTabId={activeTabId}
                  /> : <div className="" style={{ position: "absolute", bottom: "-10%",}}>
                    <VTlist
                   key={tab?.index}
                  onClick={handleLogout}
                  tabName={tab?.title}
                  index={index}
                  activeTabId={activeTabId}
                  className="logout-tab"
                />
                    </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-1">
            <div className="border-right"></div>
          </div>
          <div className="col-md-8">
            <ProfileTab index={0} activeTabId={activeTabId} />
            <PersonalInformation index={1} activeTabId={activeTabId} />
            <AccountManagement index={2} activeTabId={activeTabId} />
            <MyCards index={3} activeTabId={activeTabId} />
            <MyRequests index={4} activeTabId={activeTabId} />
            <Notifications index={5} activeTabId={activeTabId} />
            {/* {props.data.map((job, index) => (
              <VTcontent
                data={job}
                key={index}
                index={index}
                activeTabId={activeTabId}
              />
            ))} */}
          </div>
        </div>
      </div>
      <span
        className={
          activeTabId === 1
            ? "index1-chosen"
            : activeTabId === 2
            ? "index2-chosen"
            : "index3-chosen"
        }
      >
        &nbsp;
      </span>
    </div>
  );
}

export default VerticalTab;
